function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;  
}

function Employee(firstName, lastName, dob,empNumber, empStart, empSalary) {
  Person.call(this,firstName, lastName, dob)
    this.empNumber = empNumber
    this.empStart = empStart
    this.empSalary = empSalary
}


let emp01 = new Employee('Mar1', 'Monton', new Date("2022-06-09"),1, new Date("2021-06-09"), 70000)
let emp02 = new Employee('Mar2', 'Monton', new Date("2022-06-09"),1, new Date("2021-06-09"), 60000)
let emp03 = new Employee('Mar3', 'Monton', new Date("2022-06-09"),1, new Date("2021-06-09"), 60000)
let emp04 = new Employee('Mar4', 'Monton', new Date("2022-06-09"),1, new Date("2021-06-09"), 60000)
let emp05 = new Employee('Mar5', 'Monton', new Date("2022-06-09"),1, new Date("2021-06-09"), 50000)
let emp06 = new Employee('Mar6', 'Monton', new Date("2022-06-09"),1, new Date("2021-06-09"), 50000)
let emp07 = new Employee('Mar7', 'Monton', new Date("2022-06-09"),1, new Date("2021-06-09"), 50000)
let emp08 = new Employee('Mar8', 'Monton', new Date("2022-06-09"),1, new Date("2021-06-09"), 40000)
let emp09 = new Employee('Mar9', 'Monton', new Date("2022-06-09"),1, new Date("2021-06-09"), 40000)
let emp10 = new Employee('Mar10', 'Monton', new Date("2022-06-09"),1, new Date("2021-06-09"), 40000)

let employees = [emp01,emp02,emp03,emp04,emp05,emp06,emp07,emp08,emp09,emp10]

// const result = employees.empSalary.filter(employees => word.length > 6);
// const result = employees.filter(employees => employees.empSalary > 50000);

const employeeGreater = (arr, targerSalary) => arr.filter((arr) => arr.empSalary > targerSalary)
  //Option 1

  //Option 2
  // let newGreater = []
  // for(let i in arr){
  //   if(arr[i].empSalary > targerSalary){
  //     newGreater.push(arr[i])
  //   }
  // }
  // return newGreater


console.table(employeeGreater(employees, 50000));
