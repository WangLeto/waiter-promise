declare module 'waiter-promise' {
  export class Waiter<Result = void, RejectReason = void> {
    public readonly promise: Promise<Result>
    public readonly then: Promise<Result>['then']
    public readonly result: Result | null
    public readonly reason: RejectReason | null
    public readonly resolve: (result: Result) => void
    public readonly reject: (reason: RejectReason) => void
    public readonly settled: boolean
    public readonly catch: Promise<RejectReason>['catch']
  }
  export default Waiter
}
