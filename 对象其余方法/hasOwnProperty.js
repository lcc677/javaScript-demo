
let a = {
  key1:"key1"
}
Object.prototype.key2 = "key2"
console.log(Object.getPrototypeOf(a))
console.log(a.prototype)
let values1 = Symbol('values1')
let b = {
  value1:"value1",
  [values1]:"value1"
}
Object.defineProperty(b,'value2',{value:'value2'})
Object.setPrototypeOf(b,a)
console.log(b.key1)
console.log(b.key2)
console.log(b.value1)
console.log('------hasOwnProperty--------')
console.log(b.hasOwnProperty('value1'))
console.log(b.hasOwnProperty('value2'))
console.log(b.hasOwnProperty(values1))
console.log(b.hasOwnProperty('key1'))
console.log(b.hasOwnProperty('key2'))

console.log('------in--------')
console.log('value1' in b)
console.log('value2' in b)
console.log(values1 in b)
console.log('key1' in b)
console.log('key2' in b)



console.log('------propertyIsEnumerable--------')
console.log(b.propertyIsEnumerable('value1'))
console.log(b.propertyIsEnumerable('value2'))
console.log(b.propertyIsEnumerable(values1))
console.log(b.propertyIsEnumerable('key1'))
console.log(b.propertyIsEnumerable('key2'))

console.log('------keys--------')
console.log(Object.keys(b))


console.log('------getOwnPropertyNames--------')
console.log(Object.getOwnPropertyNames(b))


console.log('------getOwnPropertySymbols--------')
console.log(Object.getOwnPropertySymbols(b))
console.log('------for...in...--------')
for(let key in b){
  console.log("key:",key,"value:",b[key])
}