import { add, subtract, multiply } from './calculation'
import { person } from './person'

const addResult = add(12, 3)
const subResult = subtract(12, 3)
const multiResult = multiply(12, 3)
console.log(addResult)
console.log(subResult)
console.log(multiResult)

const anilPerson = new person('joydip', 101, 10000);
console.log(anilPerson.show())