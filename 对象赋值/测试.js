function my() {}
Object.defineProperty(my.prototype, "x", {
  value:1,
  writable:true,
  enumerable:true
  // get() {
  //   console.log("我获取的是x的值")
  //   return this.y
  // },
  // set(x) {
  //   console.log("我在这设置y的值")
  //   this.y = x
  // }
})
let a = new my()
console.log(a.hasOwnProperty('x'))
console.log(Object.keys(my.prototype))

a.x = 9
console.log(a.x)
// console.log(a.y)