// import { developer } from "./developer";
// import { hr } from "./hr";

const { developer } = require('./models/developercls');
const { addEmployee, showEmployees, deleteEmployee } = require('./manager/employeeManager');
const { hr } = require('./models/hrcls')

let choice = 2;
let status = undefined;
switch (choice) {
    case 1:
        status = addEmployee(new developer('joydip', 101, 1000, 2000, 3000, 4000))
        console.log(status ? 'record added' : 'record exists')
        break;

    case 2:
        status = deleteEmployee(101)
        console.log(status ? 'record deleted' : 'no record found')
        break;

    case 3:
        showEmployees()
        break;

    default:
        break;
}

// const joydipDev = new developer('joydip', 101, 1000, 2000, 3000, 4000);
// addEmployee(joydipDev)
//const anilHr = new hr('anil', 102, 2000, 3000, 4000, 5000)

//const employees = [joydipDev, anilHr]

// for (let index = 0; index < employees.length; index++) {
//     const emp = employees[index];
//     emp.calculateSalary();
//     console.log(emp.show())
// }

// console.log(joydipDev)
// console.log(anilHr)
// joydipDev.calculateSalary();
// anilHr.calculateSalary();
// console.log(joydipDev.show())
// console.log(anilHr.show())