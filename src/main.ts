import { IAsyncQueue, DeferredPromise, Callback } from './model';

/**
 * takes a single of promise. returns a promise for when asyncFunc are finished
 * @param  {Promise} asyncFunc
 * @return {Promise}  Promise to resolve when asyncFunc are finished
 */

export function createAsyncQueue<T = void>(opts = { parallelConcurrent: false }): IAsyncQueue<T> {
  const { parallelConcurrent } = opts
  let queue: Callback<T>[] = []
  let running: Promise<void> | undefined
  let nextPromise = new DeferredPromise<T>()

  const push = (task: Callback<T>) => {
    let taskPromise = new DeferredPromise<T>()

    // For case parallel async
    if (parallelConcurrent) {
      queue = []
      if (nextPromise.started) nextPromise = new DeferredPromise<T>()
      taskPromise = nextPromise
    }

    queue.push(() => {
      taskPromise.started = true;
      task().then(taskPromise.resolve).catch(taskPromise.reject);
      return taskPromise.promise
    })

    if (!running) running = start();

    return taskPromise.promise;
  }

  const start = async () => {
    while (queue.length) {
      const task = queue.shift()!
      await task().catch((error) => {
        throw new Error("deferred queue has error", error);
      })
    }
    running = undefined
  }

  return {
    push,
    flush: () => running || Promise.resolve(),
    get size() {
      return queue.length
    },
  }
}

/**
 * takes a custom parallel async function of promises. returns a promise for when all func of parallel async are finished
 * @param  {Array} asyncFuncArray
 * @param  {number} should parallel async run at 1 time. Default 2 async function run at the time
 * @return {Promise}  Promise to resolve when parallel async (number config) are finished
 */
export function createAsyncCombineQueue<T = void>(asyncFuncArray: T[] = [], parallelLimit: number = 2 ): any {

  const push = (task: Callback<T>) => {}

  const start = async () => {}
  
}

