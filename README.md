# Promises Breakout - W6D2

## About Me

Nima Boscarino
- ping me on slack if you have any curriculum feedback.
- taught at lighthouse for a couple years
- computer science, web development, education

Heads up, feel free to ask questions anytime. Let me know if you need any clarification, on things that I'm covering in the breakout but even stuff from outside (midterm, etc.)

## Async Review

Quick recap of ASYNC behaviour!

- What does Async mean?
    - code executing in parallel 
    - this code may run now, or later!
    - synchronous code runs in order, right now!
- What are some examples of async actions?
    - setTimeout

```js
setTimeout(() => {
    console.log('asdasdasd')
}, 2000)
console.log('aksdgakjsdgakjd)
```

    - network request
    - filesystem stuff
    - database
    - attaching event listeners

- How do we deal with asynchronous behaviour?
    - callbacks
    - Promises (totally, we'll look at this)

- What do we do if we want to queue up multiple async actions?

```js
callback
    callback
        callback
            callback
```

- What does error handling look like in these scenarios?

```

```

## Intro to Promises

A promise is a VALUE (as opposed to a currently running function) that will RESOLVE or REJECT at some point in the future.

## Promises Demo

## Making Promises

## Advanced Promises

## Wrapping Up

