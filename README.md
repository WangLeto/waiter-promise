# waiter-promise -- an enhanced promise library

Waiter is one of [Deferred](https://stackoverflow.com/questions/6801283/what-are-the-differences-between-deferred-promise-and-future-in-javascript) implementation, but with more helpful properties. We split Promise's resolve and reject method out of the declaration, know about `settled` status, and get `result` of resolve or `reason` of reject anytime.

## install

```shell
npm i -S waiter-promise
```

## use

```javascript
import { Waiter } from 'waiter-promise'

const waiterA = new Waiter()

console.log(waiterA.settled) // -> false
waiterA.then(() => {
  console.log(waiterA.result, waiterA.settled) // -> something result, true
})

const waiterB = new Waiter()
waiterB.catch(() => {
  console.log(waiterB.reason, waiterB.settled) // -> reject reason, true
})

waiterA.resolve('something result')
waiterB.reject('reject reason')
```
