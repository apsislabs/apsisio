---
author: smith
layout: post
title: An Expedition to the Perilous Lands of Undefined Behaviour
image: "/img/posts/ub/ub.png"
date: 2025-08-10
excerpt: |
    Join us on an expedition fraught with the peril of the many faces of undefined behaviour in C.
---

I'm Smith, the newest employee at Apsis Labs. Awhile back, I decided to sit down and make a concerted effort to hone my C skills. I've always been interested in game development, so what better way to
dive in than work on a toy game project that will never see the light of day? After some rooting around, I discovered an interesting project targeting Windows that piqued my interest. Porting code from Windows to MacOS sounded like a challenging exercise for project familiarization, and - after much hand-wringing and a few dead ends - I succeeded in building and running the project on MacOS. What follows is a description of one of the more interesting issues I encountered.

A caveat: I am not a writer, technical or otherwise, and this is not meant to be an exhaustive investigation into the inner workings of C on different platforms. As such, many details and explanations have been elided for brevity. Scroll to the bottom of this post for links that provide more insight into some of the topics touched on here.

## Background

The project in question uses nil structs[^1]. In a small section of code, a nil struct is compared against for iteration. This works on Windows, but fails on MacOS. A nil struct loosely resembles the following:

```C
typedef struct APS_Node APS_Node;

struct APS_Node {
    // ...
};

// Represents a nil APS node
static APS_Node aps_nil_node;
```

So there I was, furiously typing, painstakingly porting small sections of code, until I hit a puzzling segfault. I enjoy a good debugging challenge until I don't, so I set some breakpoints, fired up `lldb`, and spent a few frustrating hours wondering what was going on in the seemingly innocuous chunk of code that worked on Windows. Eventually, I narrowed down the issue to something resembling the following code:

```C
APS_Node* last = &aps_nil_node;
APS_Node* it = some_allocated_node_pointer;

for ( ; it < last; ) {
 // ...

 if ( some_condition )
 {
    iterations += 1;
    it = it->next;
 }
 else
 {
    break;
 }
}

// Segfault occurs doing work that relied on the work involving the iterator in the loop above

```

It was not immediately obvious that the loop was not iterating until I debugged it. Because of this, some important work was not being done, and the result was a segfault further down the call stack. Why is this loop not iterating, though? Surely that comparison is working... right? It was time to cobble together a minimal program to reproduce the issue.

## High or Low?

On Windows, the loop iteration works because the pointer to `aps_nil_node` has a higher address than the pointers allocated at runtime.

![Output of minimal program, Windows](/img/posts/ub/output_windows.png "Output of minimal program, Windows")

On MacOS, however, `aps_nil_node` points to something at a lower address than the pointers allocated at runtime:

![Output of minimal program, MacOS](/img/posts/ub/output_macos.png "Output of minimal program, MacOS")

We are left to conclude that Windows and MacOS differ in where they place `aps_nil_node` in the address space, and that is causing the condition to fail on MacOS.

## The ISO C Standard: `undefined behaviour`

As I bumbled along debugging this issue and sidetracked myself repeatedly with various technical documents, I also discovered (as a C neophyte would) that this pointer comparison is undefined behaviour. Undefined behaviour is detailed in Annex J, section J.2 of the ISO C standard[^2] (under the heading, naturally, of `Portability Issues`). It states:

> Pointers that do not point to the same aggregate or union (nor just beyond the same array object) are compared using relational operators (6.5.8).

## The Story Thus Far

It looks like two things are happening here:

- The pointer comparison works on Windows because the address of the `aps_nil_node` is higher than the value of the pointers allocated at runtime.
- The pointer comparison is undefined behaviour.

## A Solution

Now marginally more enlightened, a small modification can be applied to the offending code to remove the undefined behaviour:

```C
// Something like this. Season to taste.
for(; !IsNilNode(it); )
{
    // ...

    if ( some_condition )
    {
        iterations += 1;
        it = it->next;
    }
    else
    {
        break;
    }
}
```

Et voila! The loop now iterates correctly on both platforms. In the long tradition of programmers everywhere, I scribbled some woefully incomplete notes - which, in retrospect, was fortunate, as it provided the basis for this post - and moved on to the next problem, aware that other examples of this specific behaviour were likely lurking elsewhere.

## In Conclusion

Encountering this particular issue was enlightening in many regards to some of the pitfalls of C and portability. I'd like to think that I'm marginally better at C now after this exercise. Questions? Comments? Suggestions? Let me know.

[^1]: https://www.rfleury.com/p/the-easiest-way-to-handle-errors

[^2]: https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf
