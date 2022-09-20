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
// TODO: create bound copies of printFullName and printDetails.
var boundPrintFullName;
var boundPrintDetails;

var boundPrintFullName = printFullName.bind(person); 
var boundPrintDetails = printDetails.bind(person); 

// boundPrintFullName = function(){
//   printFullName.call(person);
// }
// boundPrintDetails = function(){
//   printDetails.call(person);
// }
boundPrintFullName();
boundPrintDetails();
//printFullName.call(person);


// var person = {
//   name : "John"
// };

// function printName()
// {
//   console.log(this.name);
// }

// // var boundPrintName = printName.call(person);    //boundPrintName gets printName's return value (null)
// // boundPrintName();                               //doesn't work because it's not a function, it's null

// //printName.bind(person);                         //returns a new function, but nothing is using it so it's useless
// //printName();  
// printName.call(person);  


// //   node functionContext.js