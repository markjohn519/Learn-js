function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;  
}

function Employee(empNumber, empStart, empSalary) {
      Person.call(this)
      this.firstName
      this.empNumber = empNumber
      this.empStart = empStart
      this.empSalary = empSalary
}

// Employee.prototype = new Person();

let emp01 = new Employee('Mar1', 'Monton', new Date("2022-06-09"),1,new Date("2021-06-09"), 70000)

let employee = [emp01]
console.table(employee)