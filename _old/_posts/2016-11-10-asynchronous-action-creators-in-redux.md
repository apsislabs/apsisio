---
author: niall
layout: post
title: Asynchronous Action Creators in Redux
image: 'posts/clocke.jpg'
excerpt: Improving the logic-to-boilerplate ratio of asynchronous action definitions.
---

Redux applications often use the [redux-thunk](https://github.com/gaearon/redux-thunk) middleware to dispatch actions for interacting with an HTTP API.  A pattern for asynchronous action creators is demonstrated in the [documentation](http://redux.js.org/docs/advanced/AsyncActions.html) as follows (adding the error catching logic it recommends for a real-world application):

```javascript
export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

export const RECEIVE_POSTS_ERROR = 'RECEIVE_POSTS_ERROR'
function receivePostsError(subreddit, error) {
    return {
        type: RECEIVE_POSTS_ERROR,
        subreddit,
        error
    }
}

export function fetchPosts(subreddit) {
    return function (dispatch) {
        dispatch(requestPosts(subreddit))
        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)))
            .catch(error => dispatch(receivePostsError(subreddit, error)))
    }
}
```

This is a simple pattern to follow, but it's a lot of code to write for the little bit of logic contained here.  Even worse, that logic is separated into two non-adjacent blocks which appear out of order of their execution.[^1]

```javascript
posts: json.data.children.map(child => child.data),
receivedAt: Date.now()

...

fetch(`http://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
```

I generally favour simple repetitive code over complex succinct code.  But if your application were to implement this for every API call it made, the typographical burden could prove too great to bear!

Let's see if we can improve the signal-to-noise (i.e. logic-to-boilerplate) ratio of this action definition without introducing any new dependencies or abstractions.[^2]

Here is the common structure I see in the pattern:

 1. Every asynchronous action is going to dispatch three types of synchronous actions corresponding to the `pending`, `fulfilled`, and `rejected` state of a promise.  These are the actions that will actually be handled by a reducer.

 2. The asynchronous action creator will have to accept some number of arguments in order to create the promise---in this example, it was just the name of the subreddit---and these arguments should also passed along to the reducer as part of the action object.

 3. The promise is returned to the code calling dispatch, in case it needs to chain some logic of its own.

Those observations lead us to a helper function---I suppose you could call it an asynchronous action creator *creator*---that looks like this:


```javascript
export default function promiseAction(type, createPromise) {
    const actionTypes = {
        START: type + '_START',
        SUCCESS: type + '_SUCCESS',
        ERROR: type + '_ERROR'
    }

    const actionCreator = args => (dispatch, getState) => {
        dispatch({ type: actionTypes.START, ...args })
        return createPromise({ state: getState(), ...args }).then(
            result => dispatch({ type: actionTypes.SUCCESS, result, ...args }),
            error => dispatch({ type: actionTypes.ERROR, error, ...args })
        )
    }

    return [actionTypes, actionCreator]
}
```

Now the action definition from the example can be written with almost no boilerplate:

```javascript
export const [FETCH_POSTS, fetchPosts] = promiseAction('FETCH_POSTS', ({ subreddit }) => {
    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => ({
            posts: json.data.children.map(child => child.data),
            receivedAt: Date.now()
        }))
})
```

A few notes on the implementation:

 1. We pass the state into the promise creator.  This makes it possible to implement logic like executing an HTTP request only if the resource hasn't already been loaded (see the subsequent `fetchPostsIfNeeded` example from the redux docs) without creating an additional thunk.

 2. The asynchronous action creator is called with object-style arguments rather than an argument list, so they can be passed along as named properties of the synchronous action objects.  Calling code looks like `dispatch(createPost({ author, content }))`  instead of `dispatch(createPost(author, content))`

 3. We export the three action types as a single object with `START`, `SUCCESS`, and `ERROR` properties instead of exporting three separate strings.  This is really just to have shorter import statements in the reducer.

I like this kind of helper because it makes our code less repetitive while keeping the simplicity of the original.  No new dependencies are added, no new abstractions need to be learned; we just extract a pattern which was already present.



[^1]: Of course, you can't always write code in order of execution, but when you have a few statements like: parse this JSON, then extract these properties, then set a timestamp; *which are always executed together and in that order,* it seems silly not to.

[^2]: If you are willing to increase complexity, there are certainly dependencies that you can introduce!  For example, [redux-promise](https://github.com/acdlite/redux-promise) and [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware) each implement middleware that allow you to dispatch promises directly.  They also use [flux standard actions](https://github.com/acdlite/flux-standard-action), so that's another small standard you'll need to learn.  You may be disappointed if their choice of abstraction does not line up with what you need.  redux-promise does not dispatch a starting action so you'll probably end up using it in combination with redux-thunk.  redux-promise-middleware has gone through four major versions, changing its interface a bit each time.  Neither exposes application state.
