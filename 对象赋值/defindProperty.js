// 两种描述符只能存在一种
'use strict'
let a = {}
// Object.defineProperty(a, 'key1', {value:"key1",configurable:false,get(){return 12}}) 报错
Object.defineProperty(a, 'key1', {value:"key1",configurable:false,writable:true})
Object.defineProperty(a, 'key1', { writable: false })
// a.key1 = "keys22"
console.log(a.key1)

// 如果configurable是false,那不能在更改属性的描述
// Object.defineProperty(a, 'key1', { value: "key122" }) // 报错


var pattern = {
  get: function () {
    return 'I alway return this string,whatever you have assigned';
  },
  set: function () {
    this.myname = 'this is my name string';
  }
};


function TestDefineSetAndGet() {
  console.log("9999999999")
  Object.defineProperty(this, 'myproperty', pattern);
}

console.log('8888')
var instance = new TestDefineSetAndGet();
instance.myproperty = 'test';

// 'I alway return this string,whatever you have assigned'
console.log(instance.myproperty);
// 'this is my name string'
console.log(instance.myname);  // 继承属性
