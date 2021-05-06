//1. Object literal syntax
var person = {

    name: 'joydip',
    salary: 2000,

    print: function () {
        return this.name + ', ' + this.salary;
    }
}

console.log(person.name)
console.log(person['salary'])

var info = person.print();
console.log(info)