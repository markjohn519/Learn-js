


//TODO Variables and Types
const myNumber = 3;                   // a number
const myString = "Hello, World!"      // a string
const myBoolean = true;               // a boolean
//advance types
const myArray1 = [];                    // an array
const myObject = {};                  // an object
//undefined
const newVariable;
console.log(newVariable); //prints undefined
//null
const emptyVariable = null;
console.log(emptyVariable);

//TODO Array
//Two types of array
//To define an array, either use the brackets notation or the Array object notation:
var myArray = [1, 2, 3];
var theSameArray = new Array(1, 2, 3);
//
var myArray = []
//Array Elements
var myArray = ["string", 10, {}]

//TODO Manipulating Arrays
//Pushing and popping
var myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
//pop
console.log(myStack.pop());
//Queues using shifting and unshifting
var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());
//The unshift method is used to insert a variable at the beginning of an array. For example:
var myArray = [1,2,3];
myArray.unshift(0);
console.log(myArray); 
//Splicing
var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3,5);
console.log(splice);        // will print out 3,4,5,6,7
console.log(myArray);       // will print out 0,1,2,8,9

//TODO Operator
// add +
onsole.log(3 - 5);     // outputs -2
console.log(3 * 5);     // outputs 15
console.log(3 / 5);     // outputs 0.6
//Advanced mathematical operators
console.log(5 % 3);  
// JavaScript also supports combined assignment and operation operators. So, instead of typing myNumber = myNumber / 2, you can type myNumber /= 2. Here is a list of all these operators:
// /=
// *=
// -=
// +=
// %=
//JavaScript also has a Math module which contains more advanced functions:
// Math.abs calculates the absolute value of a number
// Math.exp calculates e to the power of a number
// Math.pow(x,y) calculates the result of x to the power of y
// Math.floor removes the fraction part from a number
// Math.random() will give a random number x where 0<=x<1

//TODO Conditions
if (confirm("Are you John Smith?"))
{
    console.log("Hello John, how are you?");
} else {
    console.log("Then what is your name?");
}
console.log("1" == 1); // true
console.log("1" === 1); // false
var foo = 1;
var bar = 2;
if (foo < bar){
    console.log("foo is smaller than bar.");
}
var foo = 1;
var bar = 2;
var moo = 3;
if (foo < bar && moo > bar){
    console.log("foo is smaller than bar AND moo is larger than bar.");
}
if (foo < bar || moo > bar){
    console.log("foo is smaller than bar OR moo is larger than bar.");
}
var notTrue = false;
if (!notTrue){
    console.log("not not true is true!");
}
var rank = "Commander";
switch(rank){
    case "Private":
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}
function checkNumber(myNumber)
{
    //write your code here
    if(myNumber==42){
        console.log("correct");
    }
    else
        console.log("incorrect");
}
checkNumber(3);
checkNumber(7);
checkNumber(42);

//TODO Loops
//for loops
var i;
for (i = 0; i < 3; i = i + 1){  
    console.log(i);}
var myArray = ["A", "B", "C"];
//To iterate over an array and print out all of its members, we usually use the for statement. Here's an example:
for (var i = 0; i < myArray.length; i++){
    console.log("The member of myArray in index " + i + " is " + myArray[i]);}
//The while statement
var i = 99;
while (i > 0){
    console.log(i + " bottles of beer on the wall");
    i -= 1;}
//break and continue statements
var i = 99;
while (true){
    console.log(i + " bottles of beer on the wall");
    i -= 1;
    if (i == 0){
        break;
    }}
// The continue statement skips the rest of the loop and jumps back to the beginning of the loop. For example, if we would want to print only odd numbers using a for statement, we can do the following:
for (var i = 0; i < 100; i++){
    // check that the number is even
    if (i % 2 == 0){
        continue;
    }
    // if we got here, then i is odd.
    console.log(i + " is an odd number.");}

//TODO Objects    
// To initialize an object, use curly braces:
var emptyObject = {};
var personObject = {
    firstName : "John",
    lastName : "Smith"}
//Member addressing
//Members of objects can be addressed using the brackets operator [], very much like arrays, but just like many other object oriented languages, the period . operator can also be used. They are very similar, except for the fact that brackets return a member by using a string, in contrast to the period operator, which requires the member to be a simple word (the word should not contain spaces, start with a number or use illegal characters).
var personObject = {
    firstName : "John",
    lastName : "Smith"}
personObject.age = 23;
personObject["salary"] = 14000;
//Iteration
// Iterating over members of a dictionary is not a trivial task, since iterating over objects can also yield members who don't actually belong to an object. Therefore, we must use the hasOwnProperty method to check that the member in fact belongs to the object.
for (var member in personObject){
    if (personObject.hasOwnProperty(member))
    {
        console.log("the member " + member + " of personObject is " + personObject[member])
    }}
var person;
person = {
    firstName: "Jack",
    lastName: "Smith",
    age: 19,
    employed:true
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.employed);

//TODO Functions
// Functions are code blocks that can have arguments, and function have their own scope. In JavaScript, functions are a very important feature of the program, and especially the fact that they can access local variables of a parent function (this is called a closure).
function greet(name){
    return "Hello " + name + "!";
}   console.log(greet("Eric"));      // prints out Hello Eric!
// In this function, the name argument to the greet function is used inside the function to construct a new string and return it using the return statement.
// To define an anonymous function, we can alternatively use the following syntax:
var greet = function(name){
    return "Hello " + name + "!";
}   
console.log(greet("Eric"));      // prints out Hello Eric!

//TODO Pop-up Boxes
// There are three types of pop-up boxes in javascript: confirm, alert, and prompt. To use any of them, type
confirm("Hi!");
prompt("Bye!");
alert("Hello");
// Confirm boxes will return "true" if ok is selected, and return "false" if cancel is selected. Alert boxes will not return anything. Prompt boxes will return whatever is in the text box. Note: prompt boxes also have an optional second parameter, which is the text that will already be in the text box.

//TODO Callbacks
// Callbacks in JavaScript are functions that are passed as arguments to other functions. This is a very important feature of asynchronous programming, and it enables the function that receives the callback to call our code when it finishes a long task, while allowing us to continue the execution of the code.
var callback = function() {
    console.log("Done!");}
setTimeout(callback, 5000);
// This code waits 5 seconds and prints out "Done!" when the 5 seconds are up. Note that this code will not work in the interpreter because it is not designed for handling callbacks.
// It is also possible to define callbacks as anonymous functions, like so:
setTimeout(function() {
    console.log("Done!");
}, 5000);
// Exercise: Define a function called callback which receives an argument and prints it out.
function useCallback(callback){
    callback(1);
    callback(2);
    callback(3);}
function callback(sentence) {
    console.log(sentence);}
useCallback(callback);
// execute useCallback with the callback as the argument

//TODO Arrow Functions
// Arrow functions are a feature of ES6, their behavior are generally the same of a function. These are anonymous functions with a special syntax, they haven't their own this, arguments or super. They can't be used as constructors too.
// Arrow functions are often used as callbacks of native JS functions like map, filter or sort. The reason of their name is due to the use of => in the syntax.
// To define an arrow function, we use the () => {} structure as follows:
const greet = (name) => { return "Hello " + name + "!"; }
console.log(greet("Eric"));      // prints out Hello Eric!
// In case that the function only receives one argument, we can omit the parenthesis:
const greet = name => { return "Hello " + name + "!"; }
console.log(greet("Eric"));      // prints out Hello Eric!
// And, in case that we want to do a explicit return of the function and we have only one line of code, we can avoid the return statement and omit brackets too:
const greet = name => "Hello " + name + "!";
console.log(greet("Eric"));      // prints out Hello Eric!

//TODO Promises
// Promises are the basics of asynchronous programming in JavaScript, and are very important to master.
// What is Asynchronous Programming?
// Asynchronous programming, or in short, async programming, is a method of programming which enables different parts of code to run at changing times, instead of immediately.
// This is mostly required when we want to fetch information from some remote server, and write code which does something with what the server returned:
function getServerStatus() {
    const result = fetch("/server/status");
    // THIS WILL NOT WORK!
    console.log("The status from the server is: ", result.ok);}
// In many programming languages such as Python, this approach would work, because functions are by default synchronous functions.
// In JavaScript, most APIs which require waiting for a function to do something, are asynchronous by default which means that this code will not do what we think it will do, since the fetch function is asynchronous, and therefore will return something which is not exactly the result, but will eventually be the result. This "thing" which is returned from the fetch function is called a Promise in JavaScript.
// To make the code above work, we will need to write the function in the following manner:
function getServerStatus() {
    const result = fetch("/server/status");
    result.then(function(status) {
        console.log("The status from the server is: ", status.ok);
    });}
// Notice that we used the then function here, which is one of the methods of a Promise.
// The Promise Object
// A Promise is a native JavaScript object which has two traits: 1. It receives a single argument which is a function. This function needs to have two arguments, a resolve function and a reject function. The code written inside the promise needs to use one of these two functions. 2. It can be waited on using the then method (and other similar methods), or the await statement. (The async/await statements have a separate tutorial).
// An asynchronous function is defined by a function, which instead of returning the value it was supposed to return, it returns a Promise object, which will eventually resolve and give the user the answer.
// For example, let's say that we would like to calculate the sum of two numbers, but by writing a function which returns a Promise and not the value.
function sumAsync(x, y) {
    const p = new Promise((resolve, reject) => {
        // this resolves the promise we just created with the output of x+y
        resolve(x + y);                        
    });
    // This returns the promise, not the value
    return p;}
// let's use the function now
sumAsync(5, 7).then((result) => {
    console.log("The result of the addition is:", result);});
//Sample of a Promise
function upperCaseAsync(s) {
    // write your code here
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (s == null){
                reject("Emtry String");
            }else {
                resolve(s.toUpperCase());
            }
    	}, 500);
    })
}
upperCaseAsync("steve").then(console.log);
upperCaseAsync(null).catch((x) => {
    console.log("No string received!");
});

//TODO Async and Await
// The async and await keywords in JavaScript are used to make asynchronous programming easy, by introducing something called coroutines. A coroutine is a function which can pause its execution and return control to the main loop until some event occurs. It is an alternative approach for using callback functions, which makes it easier to write, understand and maintain.
// The await keyword
// The await keyword is a special command which tells JavaScript to stop the execution of the current function until a Promise resolves, and then return the promise's value. It can be seen as an endless loop which checks if the promise has been resolved, and returns the value of the resolved promise when it does.
// The await keyword only works inside async functions (which are coroutines, as explained before). The tricky part about async functions is that they return a Promise, instead of a value. This means that every time we need to run an async function, we need to await on it if we want to get the return value.
// Let's revisit the example of sumAsync from the Promises tutorial, but with using the sleep function instead of setTimeout, so we can implement sumAsync using await later on. The sleep function will return a Promise which resolves after ms milliseconds, and uses setTimeout to work.
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
} 
async function sumAsync(x, y) {
    // this code waits here for 500 milliseconds
    await sleep(500);
    // done waiting. let's calculate and return the value
    return x+y;
} 
// sumAsync is an async function, which means it returns a Promise.
sumAsync(5, 7).then((result) => {
    console.log("The result of the addition is:", result);});

//TODO Object Oriented JavaScript
// JavaScript uses functions as classes to create objects using the new keyword. Here is an example: 
function Person(firstName, lastName) {
    // construct the object using the arguments
    this.firstName = firstName;
    this.lastName = lastName;
// a method which returns the full name
    this.fullName = function() {
    return this.firstName + " " + this.lastName;}}
var myPerson = new Person("John", "Smith");
console.log(myPerson.fullName());            // outputs "John Smith"
// Creating an object using the new keyword is the same as writing the following code:
var myPerson = {
    firstName : "John",
    lastName : "Smith",
    fullName : function()
    {
        return this.firstName + " " + this.lastName;}}
// The difference between the two methods of creating objects is that the first method uses a class to define the object and then the new keyword to instantiate it, and the second method immediately creates an instance of the object.
// create the Person class using a function
function Person(name,age){
	this.name = name;
    this.age = age;
    this.describe = function(){
    return this.name + ", " + this.age + " years old";
    }
}
var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());
var name = "Mark";
var age = 22;
var Person = {
	name1 : name,
    age1 : age,
    describe : function(){
        return this.name1 + ", " + this.age1 + " years old";
    }
}
// console.log(Person);
console.log(Person.describe());

//TODO Function Context
// Functions in JavaScript run in a specific context, and using the this variable we have access to it.
// All standard functions in the browser run under the Window context. Functions defined under an object or a class (another function) will use the context of the object it was created in. However, we can also change the context of a function at runtime, either before or while executing the function.
// Binding a method to an object
// To bind a function to an object and make it an object method, we can use the bind function. Here is a simple example:
var person = {
    name : "John"
};
function printName()
{
    console.log(this.name);
}
// Obviously, we are not able to call printName() without associating the function with the object person. To do this we must create a bound method of the function printName to person, using the following code:
var boundPrintName = printName.bind(person);
boundPrintName();    // prints out "John"
// Calling a function with a different context
// We can use the call and apply functions to call a function as if it was bound to an object. The difference between the call and apply functions is only by how they receive their arguments - the call function receives the this argument first, and afterwards the arguments of the function, whereas the apply function receives the this argument first, and an array of arguments to pass on to the function as a second argument to the function.
// For example, let's call printName with person as the context using the call method:
printName.call(person);      // prints out "John"
// call/apply vs bind
// The difference between call/apply and bind is that bind returns a new function identical to the old function, except that the value of this in the new function is now the object it was bound to. call/apply calls the function with this being the bound object, but it does not return a new function or change the original, it calls it with a different value for this.
// For example:
var boundPrintName = printName.call(person);    //boundPrintName gets printName's return value (null)
boundPrintName();                               //doesn't work because it's not a function, it's null
printName.bind(person);                         //returns a new function, but nothing is using it so it's useless
printName();                                    //throws error because this.name is not defined
// Think of call as executing the return value of bind.
// For example:
printName.call(person);     //is the same as
printName.bind(person)();   //executes the function returned by bind
// Or think of bind returning a shortcut to call.
// For example:
var boundPrintName = printName.bind(person); //is the same as
var boundPrintName = function()
{
    printName.call(person);
}
var person = {
  firstName : "John",
  lastName : "Smith",
  age : 23
};
function printFullName(){
  console.log(this.firstName + " " + this.lastName);
}
function printDetails(){
  console.log(this.firstName + " is " + this.age + " years old");
}
//  create bound copies of printFullName and printDetails.
var boundPrintFullName;
var boundPrintDetails;
boundPrintFullName = function(){
  printFullName.call(person);
}
boundPrintDetails = function(){
  printDetails.call(person);
}
boundPrintFullName();
boundPrintDetails();

// TODO Inheritance
//avaScript uses prototype based inheritance. Every object has a prototype, and when a method of the object is called then JavaScript tries to find the right function to execute from the prototype object.
// The prototype attribute
// Without using the prototype object, we can define the object Person like this:
function Person(name, age)
{
    this.name = name;
    this.age = age;

    function describe()
    {
        return this.name + ", " + this.age + " years old.";
    }
}
// When creating instances of the Person object, we create a new copy of all members and methods of the functions. This means that every instance of an object will have its own name and age properties, as well as its own describe function.
// However, if we use the Person.prototype object and assign a function to it, it will also work.
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
}
// When creating instances of the Person object, they will not contain a copy of the describe function. Instead, when calling an object method, JavaScript will attempt to resolve the describe function first from the object itself, and then using its prototype attribute.
// Inheritance
// Let's say we want to create a Person object, and a Student object derived from Person:
var Person = function() {};
Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject){
    console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");
// As we can see in this example, the initialize method belongs to Person and the learn method belongs to Student, both of which are now part of the me object.
// Keep in mind that there are many ways of doing inheritance in JavaScript, and this is just one of them.
var Person = function() {};
Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}
//create the class Teacher and a method teach
var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject){
    console.log(this.name + " is now teaching " + subject);
}
var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");

//TODO Destructuring
// Destructuring is a feature of ES6, introduced for making easier and cleaner repetitive operations and assignments made in JS.
// With destructuring we can extract data from a deeper level inside an array / object with a more concise syntax, even giving this 'extracted' data some other name in the same operation.
// In JavaScript we can achieve this in a very simply way:
// Consider this object
const person = {
    head: {
        eyes: 'x',
        mouth: {
            teeth: 'x',
            tongue: 'x'
        }
    },
    body: {
        shoulders: 'x',
        chest: 'x',
        arms: 'x',
        hands: 'x',
        legs: 'x'
    }   
};
// If we want to get head, the old way:
let head = person.head;
// ES6 Destructuring
let { head } = person;
// We can give other name as if a variable was declared, in the same line
let { head : myHead } = person;
// So we can do...
console.log(myHead);            // prints '{ eyes, mouth: { ... } }'
With arrays:
let numbers = ['2', '3', '7'];
// Old way
let two = numbers[0];
let three = numbers[1];
// ES6 Destructuring
let [two, three] = numbers;
// We can give them other names too
let [two: positionZero, three: positionOne] = numbers;
console.log(positionZero)       // prints '2'
console.log(positionOne)        // prints '3'
// We can do this with function parameters too:
// Old way
function getHeadAndBody(person) {
    let headAndBody = {
        head: person.head,
        body: person.body
    }
    return headAndBody;
}
// ES6 Destructuring
function getHeadAndBody({ head, body }) {
    return { head, body }
}
// With arrow functions
let getHeadAndBody = ({ head, body }) => { head, body };
//Warning: Be careful with destructuring, if you aren't sure if the function is going to receive an object with those parameters, it's better to use the old way in order to not incurring in head / body is undefined errors. You can avoid that type of errors while using ES6 Destructuring giving default parameters to the function, so you can be sure that properties will exist, not being obliged to rely on the parameters received.
// I'm not sure if head and body will be present in some cases...
// Now we are sure that head or body will be equal to '' if the real parameter doesn't have that properties inside
function getHeadAndBody({ head = '', body = '' }) {
    return { head, body }
}
//You can destructure as deep as you like, always considering if that property exists.
// Deep destructuring
let computer = {
    processor: {
        transistor: {
            silicon: {
                thickness: '9nm'
            }
        }
    }
}
let {
    processor: 
        { 
            transistor: { 
                silicon: { 
                    thickness 
                }
            }
        } 
} = computer;
// Making it cleaner
let { thickness: inteli9Thickness } = computer.processor.transistor.silicon;
console.log(inteli9Thickness)          // prints '9nm'





const name = "Mark";
console.log(name);