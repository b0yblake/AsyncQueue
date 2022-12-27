/**
 * type of the callback, except capture generic type on input and output
 */
export type Callback<T> = () => Promise<T>;

/**
 * IAsyncQueue
 */
export type IAsyncQueue<T = void> = {

  // push
  push: (task: Callback<T>) => Promise<T>;

  // flush
  flush: () => Promise<void>;

  // size
  readonly size: number;
}

/**
 * DeferredPromise
 */
export class DeferredPromise<T = void, E = any> {
  // started
  started = false

  resolve: (x: T | PromiseLike<T>) => void = () => {}
  reject: (x: E) => void = () => {}
  promise: Promise<T>

  /**
   * constructor
   */
  constructor() {

    // promise
    this.promise = new Promise<T>((res, rej) => {
      this.resolve = res
      this.reject = rej
    })
  }
}