> ℹ️
Before submitting an issue to this repo - Ensure it's a **issue with the code in this repo**, you may meet some issue from `rollup` config - please take a look in this document [Rollup](https://rollupjs.org/guide/en/)

## Why
Being a front-end engineer, especially deal with asynchronous coding, with some context special, queue loop stack in default browser not run like what you want.
So I write this lib for difference mode: `single` `parallel` `combine`

- Original event loop: 
<img src="https://i.ibb.co/nbQc6sk/Javascript-event-loop.png" alt="javascript event loop">

- With `AsyncQueue` mode single

- With `AsyncQueue` mode parallel

- With `AsyncQueue` mode combine


## Running it on own's

-   Clone the project:

```shell
$ git clone https://github.com/b0yblake/AsyncQueue
```

-   Install:

```shell
$ cd csslayout
$ yarn
```

## How is work

```javascript
import { createAsyncQueue } from "AsyncQueue";
const queueProcess = createAsyncQueue();

// Some async function
function async doSomeThing() {}

// Push to list
await queueProcess.push(doSomeThing);
```

## Explain

```javascript
```

## Contributing

PRs are welcomed. If you think there are any missing useful layouts or patterns, please create an issue or submit a PR.

If there is any issue, it will be logged in the `tslint.log` file.

## About

This project is developed by _Nguyen Huu Lich_. I love building products and sharing knowledge.

Be my friend on

-   [Twitter](https://twitter.com/lichhuuhuu)
-   [Github](https://github.com/b0yblake)
