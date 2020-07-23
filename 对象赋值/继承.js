
// function myclass() {
// }
// var value = 1
// Object.defineProperty(myclass.prototype, "x", {
//   get() {
//     return value;
//   },
//   set(x) {
//     value = x;
//   }
// });

// console.log(value)
// var a = new myclass();
// var b = new myclass();
// a.x = 1;
// console.log(b.x); // 1


function myclass() {
}

Object.defineProperty(myclass.prototype, "x", {
  get() {
    return this.stored_x;
  },
  set(x) {
    console.log("wo set le ")
    this.stored_x = x;
    console.log(this.x)
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(a.__proto__.x)
console.log(a.x)
console.log(a.stored_x)
console.log(b.x); // undefined

// myclass.prototype.x = 1;
// Object.defineProperty(myclass.prototype, "y", {
//   writable: false,
//   value: 1
// });
// let mc = new myclass()
// mc.x = 2
// console.log(mc.x)
// console.log(mc.__proto__.x)
// mc.y = 2
// console.log(mc.y)
// console.log(mc.__proto__.y)

// let mc = new myclass()
// let mc2 = new myclass()
// mc.__proto__.x = 2
// console.log(mc.x)
// console.log(mc2.x)