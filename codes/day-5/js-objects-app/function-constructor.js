//constructor function
function person(name, id, salary) {
    this.personName = name;
    this.personId = id;
    this.personSalary = salary;
    this.printInfo = () => {
        return this.personName + ', ' + this.personId + ', ' + this.personSalary;
    }
    // this.printInfo = function () {
    //     return this.personName + ', ' + this.personId + ', ' + this.personSalary;
    // }
    // this.printInfo = this.printInfo.bind(this);
}

var apurva = new person('apurva', 1, 2000);//{}<--blank????
console.log(apurva.printInfo())

var imran = new person('imran', 2, 3000)//{}
var pi = imran.printInfo;
console.log(pi())

var prashant = new person('prashant', 3, 4000)//{}
console.log(prashant.printInfo())

console.log(apurva)
console.log(imran)
console.log(prashant)
/*
var obj1 = {}
var obj2 = {}
var obj3 = {}

var person1 = person.bind(obj1);
person1('apurva', 1, 2000);

var person2 = person.bind(obj2)
person2('imran', 2, 3000)

var person3 = person.bind(obj3)
person3('prashant', 3, 4000)

console.log(obj1)
console.log(obj2)
console.log(obj3)
*/
// console.log(window.personName)
// console.log(personId)
// console.log(window.personSalary)
// console.log(this.printInfo())