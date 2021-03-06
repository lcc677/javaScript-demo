const axios = require('axios')

setTimeout(function () {
  console.log('setTimeout');
}, 0);

const ax = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
ax.request({
  url:'system/index',
  method: 'get'
}).then(response =>{
  console.log(response.data)
})
Promise.resolve().then(function () {
  console.log('promise1');
}).then(function () {
  console.log('promise2');
});

console.log('script end');