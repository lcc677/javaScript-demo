let a = []
let b = [1,2,3,4]
// a.push.apply(a,b)
a.push(1,2,3,)
console.log(a)
for (let i=0;i<65590;i++){
  a.push(i)
}

console.log(Math.max(...a))
console.log(Math.max.apply(null,a))