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



var random=[];
var i = Math.random();
for(var x=0;x<=10;x++){
  random.push(Math.random());
}
console.log(random);