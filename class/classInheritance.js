class Animal {
  constructor(name){
    this.name = name;
  }
  speak() {
    console.log(this.name + ' make a noise.')
  }
}
class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.')
  }
}

let dog = new Dog('Rex')
dog.speak()