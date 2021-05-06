/*
//1. problem: 1
//console.log(x) //error: x is not defined
x = 100;
console.log(x) //100

console.log(a) //undefined
var a = 10;
console.log(a) //10

for (var i = 0; i < 2; i++) {
    var a = 20;
    console.log(a) //20
}

console.log(a) //20
*/

//problem: 2
var person = {

    pname: 'joydip',
    salary: 2000,

    print: function () {
        console.log(this)
        var res = this.pname + ', ' + this.salary;
        console.log(res)
        return res;
    }
}

//console.log(person['salary'])
var information = person.print();
console.log(information)

// var pname = "anil kumar"
// var salary = 30000

var printRef = person['print'];
// console.log(printRef)
// console.log(typeof printRef)
var boundRef = printRef.bind(person);
//var info = printRef();
var info = boundRef();
console.log(info)
//console.log(window)

// var onEventFired = function () {
//     console.log(this)
//     console.log(earg.target)
// }