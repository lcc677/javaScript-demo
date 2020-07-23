function my() {}
Object.defineProperty(my.prototype, "x", {
  get() {
    console.log("我获取的是x的值")
    return this.y
  },
  set(x) {
    console.log("我在这设置y的值")
    this.y = x
  }
})
let a = new my()
console.log(a.constructor)
a.x = 9
console.log(a.x)
console.log(a.y)
// console.log(a.y)