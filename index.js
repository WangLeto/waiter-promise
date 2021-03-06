export class Waiter {
  constructor () {
    this._private = {}
    this.promise = new Promise((resolve, reject) => {
      this._private.resolve = resolve
      this._private.reject = reject
    })
    this.then = this.promise.then.bind(this.promise)
    this.catch = this.promise.catch.bind(this.promise)
    this.settled = false
    this.result = null
    this.reason = null
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }

  resolve (obj) {
    if (this.settled) {
      return
    }
    this.settled = true
    this.result = obj
    this._private.resolve(obj)
  }

  reject (reason) {
    if (this.settled) {
      return
    }
    this.settled = true
    this.reason = reason
    this._private.reject(reason)
  }
}

export default Waiter
