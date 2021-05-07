function person(name, id, salary) {
    this.personName = name;
    this.personId = id;
    this.personSalary = salary;
    this.printInfo = () => {
        return this.personName + ', ' + this.personId + ', ' + this.personSalary;
    }
}


//prototype property of any function returns a reference of another object
console.log(person.prototype)
var joydip = new person('joy', 1, 1000)
// console.log(joydip.__proto__)

// console.log(person.prototype === joydip.__proto__)
console.log(joydip)

var p = {

}
console.log(p)
console.log(Object.prototype)