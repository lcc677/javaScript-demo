function Student(){
  this.name = "lcc"
}
Student.prototype.age = 12
let st = new Student()
console.log(st);
console.log(st.__proto__);
console.log(st.__proto__.__proto__);
console.log(st.__proto__.__proto__.hasOwnProperty);
console.log(Object.prototype.hasOwnProperty);

class Person{
  constructor(){
    this.name="name"
  }
  add() {
    console.log(99)
  }
}
let person = new Person()
console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('add'))
console.log(Person.prototype)
person.add()
console.log(Person.prototype.add)