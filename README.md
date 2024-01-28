This is a simple example to illustrate issue with itty-cors.

From another origin in browser, run this to test:

```js
console.log(await fetch('https://cf-itty-cors-example.dkonsumer-gummicube.workers.dev/test', {
  method: 'POST',
  body: JSON.stringify({ message: 'Hi!' })
}).then(r => r.json()))
```