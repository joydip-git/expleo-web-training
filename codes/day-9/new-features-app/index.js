const person = {
    name: 'anil',
    id: 2,
    salary: 3000
}

//const personName = person.name;
//const personName = person['name']

const { name: personName, salary: personSalary } = person;
//personSalary = 4000;
console.log(personName)
console.log(personSalary)

// const numbers = [1, 2, 3, 4];
// const [a, b] = numbers;
// console.log(a)
// console.log(b)

const numbers1 = [1, 2, 3, 4];
const number2 = [10, 20, 30, 40]

const [[, m, , n], [x, y]] = [numbers1, number2]
console.log(m)
console.log(n)
console.log(x)
console.log(y)

const people = [{
    name: 'anil',
    id: 2,
    salary: 3000
}, {
    name: 'sunil',
    id: 1,
    salary: 4000
}]

const [{ salary: aSalary }, { name: sName }] = people;
// const anilSal = people[0].salary;
// const sunName = people[1].name;
console.log(aSalary)
console.log(sName)


// import { add, subtract } from "./calculation";
//const calcMembers = require('./calculation')
const { add } = require('./calculation')

console.log(add(10, 20))



