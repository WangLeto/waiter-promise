# waiter-promise -- an enhanced promise library

By using Waiter, you can easily split promise's resolve method and reject method from its declaration, and you can take the future advance of `settled` property, or get `result` of resolve or `reason` of reject anytime.

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
  console.log(waiterA.result, waiterA.settled) // -> something true
})

const waiterB = new Waiter()
waiterB.catch(() => {
  console.log(waiterB.reason, waiterB.settled) // -> bad thing true
})

waiterA.resolve('something')
waiterB.reject('bad thing')
```
