function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;  
} 

function Employee(firstName, lastName, dod,empNumber, empStart, empSalary) {
    Person.apply(this,[firstName],[lastName],[dod])
    this.empNumber = empNumber
    this.empStart = empStart
    this.empSalary = empSalary
  }


let emp01 = new Person('Mar1', 'Monton', new Date("2022-06-09"))
emp01.employee(1, new Date("2021-06-09"), 70000)
let emp02 = new Person('Mar2', 'Monton', new Date("2022-06-09"))
emp02.employee(1, new Date("2021-06-09"), 60000)
let emp03 = new Person('Mar3', 'Monton', new Date("2022-06-09"))
emp03.employee(1, new Date("2021-06-09"), 60000)
let emp04 = new Person('Mar4', 'Monton', new Date("2022-06-09"))
emp04.employee(1, new Date("2021-06-09"), 60000)
let emp05 = new Person('Mar5', 'Monton', new Date("2022-06-09"))
emp05.employee(1, new Date("2021-06-09"), 50000)
let emp06 = new Person('Mar6', 'Monton', new Date("2022-06-09"))
emp06.employee(1, new Date("2021-06-09"), 50000)
let emp07 = new Person('Mar7', 'Monton', new Date("2022-06-09"))
emp07.employee(1, new Date("2021-06-09"), 50000)
let emp08 = new Person('Mar8', 'Monton', new Date("2022-06-09"))
emp08.employee(1, new Date("2021-06-09"), 40000)
let emp09 = new Person('Mar9', 'Monton', new Date("2022-06-09"))
emp09.employee(1, new Date("2021-06-09"), 40000)
let emp10 = new Person('Mar10', 'Monton', new Date("2022-06-09"))
emp10.employee(1, new Date("2021-06-09"), 40000)

let employees = [emp01,emp02,emp03,emp04,emp05,emp06,emp07,emp08,emp09,emp10]

const employeeGreater = (arr, targerSalary) => arr.filter((arr) => arr.empSalary > targerSalary)

console.table(employeeGreater(employees, 50000));
