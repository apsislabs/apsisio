---
layout: post
author: niall
title: Parsing JSON with Types (Part 1)
---

I like to have well-defined models of my application data, especially at service boundaries.  I usually also define types in my application code to reflect these models.  When data are sent from a service, their values are serialized and their types are mapped onto the type system of the serialization format.  Then, when receiving data, I need to deserialize the values _and also_ map the types back into the richer type system of my application code.

In statically typed languages, application frameworks or libraries typically handle this for me.  In dynamically typed languages, the situation is usually worse.  All a library has to go off is the runtime type of the deserialized values, which restricts it to types representable in the serialization format.  For JSON being deserialized into a JavaScript application, this means all I get are strings, numbers, booleans, and arrays or objects (i.e. string-keyed maps) of those basic types.

I want a systematic way to deserialize JSON data into my application types.

### Prior Art

I thought there must exist a JavaScript package to do this already but I wasn’t able to find anything very promising.[^prior-art]

Some work has been done on recognizing certain types, especially ISO date strings, and parsing them automatically into date objects.  See for example [JavaScript JSON Date Parsing and real Dates](https://weblog.west-wind.com/posts/2014/Jan/06/JavaScript-JSON-Date-Parsing-and-real-Dates).  But this doesn’t let you use application-defined types, and it still involves a lot of guesswork.[^guesswork]

There are some more promising projects like [typed-json](https://github.com/pd/typed-json) which attempt to deal with types in general, but these still have significant limitations.  They require type information, like a constructor name, to be embedded in the data.  This couples your service code to the type system of one particular client, which is... not great.  And of course, if you don’t control the service you are receiving data from, this is impossible to implement.

### Type Mapping

What I really wanted was something that would (a) not require services to be aware of what my client was doing, and (b) give me powerful building blocks for mapping data into my application types.

For clarity, let me define a few terms as they will be used in the remainder of this post before showing you what I made:

* **JSON Object:** A JavaScript object whose values are exclusively JSON types.  This is the kind of object you get back from JSON.parse().
* **Application Object:** A JavaScript object whose values may include JavaScript’s other built-in types (e.g. Date) and application-defined types (e.g. ES6 classes or objects with custom prototype chains).
* **Deserialization**: The process of turning a JSON object into an application object.  **Serialization** is the reverse.
* **Type Mapper:** A JavaScript object with `fromJSON` and `toJSON` properties, which are functions that implement deserialization and serialization.

Now, on to the code...

#### Basic Types

Basic types are the primitives of a type system.  Based on our definition above, let's define a few type mappers for basic types:

```
const string = {
    fromJSON: s => s,
    toJSON: s => s
};

const number = {
    fromJSON: n => n,
    toJSON: n => n
};

const boolean = {
    // Left as an exercise for the reader
};
```

It's brilliant, right?  Well, these types are shared by JSON and JavaScript's type systems, so there's nothing to do.  Let's try dates next:

```
const date = {
    fromJSON: isoString => new Date(isoString),
    toJSON: date => date.toISOString()
};
```

Fantastic.  Of course, we could also represent dates in our application using [moment](https://momentjs.com/) and they could be represented in our JSON data as time values (number of milliseconds since Unix epoch).  Then, our date type mapper would look like:

```
import moment from 'moment';

const date = {
    fromJSON: timeValue => moment(timeValue),
    toJSON: m => m.valueOf()
};
```

So even basic type mappers can be redefined based on the needs of the application or the eccentricities of the services it connects to.

#### Parameterized Types

It doesn't make sense to define all basic type mappers this way.  Some types may be parameterized, e.g. an array of numbers vs. an array of strings.  A **type mapper constructor**, which is a function that returns a type mapper, is a way to implement them.  Let's define a few type mapper constructors:

```
function arrayOf(type) {
    return {
        fromJSON: array => array.map(type.fromJSON),
        toJSON:   array => array.map(type.toJSON)
    };
}

function setOf(type) {
    return {
        fromJSON: array => new Set(array.map(type.fromJSON)),
        toJSON:   set => Array.from(set, type.toJSON),
    };
}
```
```
const fibonacci = [1, 1, 2, 3, 5];

let type = arrayOf(number);
console.log(type.fromJSON(fibonacci));
// [1, 1, 2, 3, 4]

type = setOf(number);
console.log(type.fromJSON(fibonacci));
// Set {1, 2, 3, 4}
```

Note that JavaScript arrays and sets have the same representation in JSON's type system but we can choose how to deserialize it by specifying a type mapper.

Maps are another useful parameterized type to implement.  In JavaScript, we often use objects if all we need is a string-keyed map, but let's also add the possibility of using actual Map objects which support keys of any type.  Again, both of these will be represented the same way in JSON's type system.

```
function objectOf(type) {
    return {
        fromJSON: object => _.mapValues(object, type.fromJSON),
        toJSON:   object => _.mapValues(object, type.toJSON),
    };
}

// Helper function to map over an array of [key, value] tuples
const mapEntries = (mapKey, mapValue) => entries => entries.map(([key, value]) => [mapKey(key), mapValue(value)]);

function mapOf(keyType, valueType) {
    return {
        fromJSON: object => new Map(mapEntries(keyType.fromJSON, valueType.fromJSON)(_.toPairs(object))),
        toJSON:   map => _.fromPairs(mapEntries(keyType.toJSON, valueType.toJSON)(Array.from(map)))
    };
}
```
```
const holidays = {
    "2017-01-01": ["New Year's Day", "Public Domain Day"],
    "2017-01-25": ["Republic Day", "Australia Day"]
};

let type = objectOf(arrayOf(string));
console.log(type.fromJSON(holidays));
// Object {
//    2017-01-01: ["New Year's Day", "Public Domain Day"],
//    2017-01-25: ["Republic Day", "Australia Day"]
// }

type = mapOf(date, setOf(string));
console.log(type.fromJSON(holidays));
// Map {
//   Sun Jan 01 2017 00:00:00 => Set {"New Year's Day", "Public Domain Day"},
//   Wed Jan 25 2017 00:00:00 => Set {"Republic Day", "Australia Day"}
// }
```

#### Composite Types

Okay, lets move on to composite types.  Composite types contain basic types and other composite types.  You could define a `fromJSON` and `toJSON` function for every composite type as well, but there is a much simpler solution.  Let's define a **schema** to be a JavaScript object whose values are all **type mappers**.

```
const commentSchema = {
    author: string,
    content: string,
    likes: number,
    flagged: boolean,
    posted: date
};
```

Then we can turn arbitrary **schemas** into **type mappers**:

```
import _ from 'lodash';

function typeMapper(schema) {
    return {
        fromJSON: object => _.mapValues(schema, (type, key) => type.fromJSON(object[key])),
        toJSON:   object => _.mapValues(schema, (type, key) => type.toJSON(object[key]))
    };
}

const commentType = typeMapper(commentSchema);
```

And now we can plug this type into an appropriate location in our application code, for example:

```
function loadComment(id) {
    return fetch(`/comments/${id}`).then(response => {
        const jsonObject = response.json();
        const applicationObject = commentType.fromJSON(jsonObject);
        return applicationObject;
    });
}

function createComment(commentObject) {
    const jsonObject = commentType.toJSON(commentObject);
    return fetch('/comments', {
        method: 'POST',
        body: JSON.stringify(jsonObject),
        headers: { 'Content-Type': 'application/json' }
    });
}
```

That composite type contained only basic types.  Let's look at one that also uses type constructors and other composite types:

```
const articleType = typeMapper({
    author: string,
    content: string,
    published: boolean,
    comments: listOf(commentType)
});

function loadArticle(id) {
    return fetch(`/articles/${id}`).then(r => articleType.fromJSON(r.json()));
}
```

### Up Next

In part two of this series I'll show how we can:

 * deserialize into ES6 classes
 * deserialize into Immutable collections and records
 * use the `reviver` and `replacer` arguments of `JSON.parse` and `JSON.stringify`

In part three, I'll look into how this works with TypeScript.  I imagine TypeScript developers make heavier use of application-defined types, so it could be even more useful in that context.  I haven't used TypeScript much before, but I think it should plug in pretty transparently.

By the end of this series, I'd also like to publish this code on github and npm.  The main things are to decide what basic types and type constructors should be included in the package, and to write some unit tests and developer documentation.

If you have any feedback or advice, I'd love to hear it!  You can get in touch on twitter at [@niallwingham](https://twitter.com/niallwingham).

[^prior-art]: In fact, I still think I must have somehow overlooked an existing solution because this is a pretty general problem.  If you've written or used one, please let me know.

[^guesswork]: For example, what if you deserialize comment data with a string content property, and a date posted property using a “date-aware” parser?  If a user enters a comment that happens to be a valid ISO string, both properties are going to end up parsed as dates.