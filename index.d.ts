declare module 'waiter-promise' {
  class Waiter<T = void, K = void> {
    public readonly promise: Promise<any>
    public readonly then: Promise<T>['then']
    public readonly result: T
    public readonly reason: K
    public readonly resolve: (result: T) => void
    public readonly reject: (reason: K) => void
    public readonly settled: boolean
    public readonly catch: Promise<K>['catch']
  }
  export = Waiter
}
