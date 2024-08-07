> ℹ️
Before submitting an issue to this repo - Ensure it's a **issue with the code in this repo**, you may meet some issue from `rollup` config - please take a look in this document [Rollup](https://rollupjs.org/guide/en/) and vite [Vite](https://vitejs.dev/guide/)

## Why
As a front-end engineer dealing with asynchronous code, you might find that the default browser queue loop stack doesn't always behave as expected in special contexts. <br>
This library provides different modes for queue management: `single` `parallel`

### Original event loop
<img src="https://i.ibb.co/nbQc6sk/Javascript-event-loop.png" alt="javascript event loop">

- Functions can be:
- Synchronous - execute step-by-step ()
- Asynchronous - executed according to the rules of the Event loop. Learn more about the Event loop <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop" target="_blank">Link</a> (Implement of <a href="" target="_blank">Stack DS</a>)

### With `AsyncQueue` mode single

- Asynchronous functions are executed with a new approach
    + Functions are pushed into an array[]
    + One function at a time is run from the array (following the Data Structure approach), called by the normal web browser call stack.
    + After the function finishes (either rejected or fulfilled), it is removed from the array, and the next function is executed.
    + Only one function is executed at a time.

### With `AsyncQueue` mode parallel

- Extends single mode by adding:
    + A `parallelLimit` parameter.
    + Executes both synchronous and asynchronous functions concurrently.

## Running it Locally

-   Clone the project:

```shell
$ git clone https://github.com/b0yblake/AsyncQueue
```

-   Install:

```shell
$ cd AsyncQueue
$ yarn
```

## Usage

```javascript
import { createAsyncQueue } from "asyncqueue-custom"
const queueProcess = createAsyncQueue()

// Some async functions
function async doSomeThing1() {
  setTimeout(() => {
    console.log('1')
  }, 10000)
} //Finish in 10s
function async doSomeThing2() {
  setTimeout(() => {
    console.log('2')
  }, 2000)
} //Finish in 2s
function async doSomeThing3() {
  setTimeout(() => {
    console.log('3')
  }, 5000)
} //Finish in 5s

// Push to list
const opts = {
  parallelConcurrent: false,    // True for parallel mode
  approach: 'fifo',             // Optional, default fifo
  autostart: false              // Auto start queue process after push
}
await queueProcess.push(doSomeThing)
await queueProcess.push(doSomeThing2)
await queueProcess.push(doSomeThing3)

await queueProcess.start(opts)
// Expected output order: 1, 2, 3
// Functions run and print in the order they finish execution
```

```javascript
```

## Contributing

PRs are welcomed. If you think there are any missing useful layouts or patterns, please create an issue or submit a PR.

If there is any issue, it will be logged in the `tslint.log` file.

## About

This project is developed by _b0yblake_. I love building products and sharing knowledge.

Be my friend on

-   [Twitter](https://twitter.com/lichhuuhuu)
-   [Github](https://github.com/b0yblake)
