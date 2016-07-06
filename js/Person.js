class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  getName(){
    return this.name;
  }
  sayHello(){
    return 'Hello I\'m ' + this.getName();
  }

}

module.exports = Person;
