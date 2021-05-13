// import { developer } from "./developer";
// import { hr } from "./hr";

const { developer } = require('./models/developercls');
const { addEmployee, showEmployees, deleteEmployee } = require('./manager/employeeManager');
const { hr } = require('./models/hrcls')
const readlineModule = require('readline')

const readline = readlineModule.createInterface({
    input: process.stdin,
    output: process.stdout
})
/*
const allArgs = process.argv;
//const args = allArgs.slice(2)
//let choice = parseInt(args[0].split('=')[1])
const args = allArgs[2]
let choice = parseInt(args.split('=')[1])
*/

readline.question('enter choice: ', input => {
    call(parseInt(input))
    readline.close();
})

function call(choice) {
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