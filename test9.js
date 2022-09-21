let Person = function() {}

Person.prototype.information = function(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;

  function info(){
    return this.firstName + ", " + this.lastName+ ", Birthday" + this.dob
  }
}

Person.prototype.information('Mark', 'Monton', '09/06/2022');

console.log(Person.information.info('Mark', 'Monton', '09/06/2022'))