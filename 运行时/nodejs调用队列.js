// setTimeout(() => {
//   console.log('timer1')

//   Promise.resolve().then(function () {
//     console.log('promise1')
//   })
// }, 0)

// setTimeout(() => {
//   console.log('timer2')

//   Promise.resolve().then(function () {
//     console.log('promise2')
//   })
// }, 0)

// setTimeout(() => {
//   console.log('timeout')
// }, 0)

// setImmediate(() => {
//   console.log('immediate')
// })

// const fs = require('fs');

// function someAsyncOperation(callback) {
//   // Assume this takes 95ms to complete
//   fs.readFile('./基础.js', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 50);

// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//   const startCallback = Date.now();
//   console.log(timeoutScheduled)
//   // do something that will take 10ms...
//   while (Date.now() - startCallback < 100) {
//     // do nothing
//   }
//   console.log(Date.now() - timeoutScheduled);
// });

// const EventEmitter = require('events');
// const util = require('util');

// function MyEmitter() {
//   EventEmitter.call(this);
//   this.emit('event');
// }
// util.inherits(MyEmitter, EventEmitter);

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });

// const EventEmitter = require('events');
// const util = require('util');

// function MyEmitter() {
//   EventEmitter.call(this);

//   // use nextTick to emit the event once a handler is assigned
//   process.nextTick(() => {
//     this.emit('event');
//   });
// }
// util.inherits(MyEmitter, EventEmitter);

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });

let bar;

// this has an asynchronous signature, but calls callback synchronously
function someAsyncApiCall(callback) { process.nextTick(callback()) }

// the callback is called before `someAsyncApiCall` completes.
someAsyncApiCall(() => {
  // since someAsyncApiCall hasn't completed, bar hasn't been assigned any value
  console.log('bar', bar); // undefined
});

bar = 1;

