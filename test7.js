const person = {
  first: 'Mark',
  last: 'Monton',
  dob: new Date('11/08/1999'),
  age: () => {
    const today = new Date();
    const birhtday = new Date(today.getFullYear(), this.dob.getMonth(), this.dob.getDate())
    //let age;
    if (today > birhtday){
      return today.getFullYear() - this.dob.getFullYear()
    }else {
      return today.getFullYear() - this.dob.getFullYear() - 1
    }
  }
}
console.log(person.dob);
console.log(person.age());