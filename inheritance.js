function Person(name, age) {
    this.name = name;
    this.age = age;
};

function Teacher(subject) {
    this.subject = subject;
}

Teacher.prototype = new Person();

var him = new Teacher("Adam", 45,"Inheritance")

console.log(him)
