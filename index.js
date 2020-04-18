export class Waiter {
  constructor () {
    this._private = {}
    this.promise = new Promise((resolve, reject) => {
      this._private.resolve = resolve
      this._private.reject = reject
    })
    this.then = this.promise.then.bind(this.promise)
    this.settled = false
    this.result = null
    this.reason = null
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }

  resolve (obj) {
    this.settled = true
    this.result = obj
    this._private.resolve(obj)
  }

  reject (reason) {
    this.settled = true
    this.reason = reason
    this._private.reject(reason)
  }
}
