// import { add } from "./calculation";
// import { person } from "./person";
import { trainer } from "./trainer";
import { trainee } from "./trainee";

//console.log(add(10, 20))

const joydipTrainer = new trainer('joydip', 'Bangalore', 'JavaScript')
console.log(joydipTrainer.show())

const anilTrainee = new trainee('anil', 'Chennai', 'expleo groups', 'mobile')
console.log(anilTrainee.show())

/*
Object.prototype.sayHi = function () {
    console.log('Hi....')
}
console.log(Object.prototype)

console.log(joydipTrainer.hasOwnProperty('sayHi'))
console.log(trainer.prototype.hasOwnProperty('sayHi'))
console.log(Object.prototype.hasOwnProperty('sayHi'))

joydipTrainer.sayHi();

var data = {
    name: 'anil'
}

*/

/*
console.log('add prototype')
console.log(add.prototype)

console.log('trainer prototype')
console.log(trainer.prototype)

console.log('person prototype')
console.log(person.prototype)

console.log('object prototype')
console.log(Object.prototype)
*/
/**
 * function Object(){}
 */