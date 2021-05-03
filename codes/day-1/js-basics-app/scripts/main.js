
/*
var x = 10; //loose typing
x = 'joydip';
x = true

x = {
    name: 'joydip',
    id: 1,
    salary: 1000
}

x = new Array();
x = 12.34;
console.log(typeof x)

var x = 10;
var y = 20;
var z = x + y;
console.log(z)
console.log(x < y);

var m = x > y ? x : y;
console.log(m)

console.log(x++)
console.log(++x)

var a = 2; // 10
var b = 3; //11
var c = 4;

var res1 = (a << b);
console.log(res1)

if (a > b)
    if (a > c)
        console.log(a)
    else
        console.log(c)
else
    console.log(b)

var choice = 3;
//1: sort by experience (exp)
//2: sort by id (id)
//3. sort by number of projects (proj)
if (choice == 1) {

} else if (choice == 2) {

} else if (choice == 3) {

} else {

}

choice = 'exp';
switch (choice) {
    case 'exp':
        break;

    case 'id':
        break;

    case 'proj':
        break;

    default:
        break;
}

while (c > 0) {
    console.log(c)
    c--;
}

do {
    console.log(c)
    c--;
} while (c > 0)

for (var n = 0; n < 5; n++) {
    console.log(c);
}

var numbers = [1, 9, 3, 2, 5, 6, 4, 8, 0, 7];
var newNumbers = [11, 13, 12]
numbers.push(...newNumbers);//spread operator
console.log(numbers)

var sliceOfNumbers = numbers.slice(3, 3)
console.log(numbers)
console.log(sliceOfNumbers)

sliceOfNumbers.splice(0, 1);
console.log(sliceOfNumbers)
sliceOfNumbers.splice(0, 1, 10);
console.log(sliceOfNumbers)

for (var index = 0; index < numbers.length; index++) {
    var num = numbers[index];
    if (num % 2 == 0) {
        console.log(num)
    }
}

//object literal syntax
var joyObj = {
    name: 'joydip',
    id: 2,
    salary: 1000
}

var anilObj = {
    name: 'anil',
    id: 1,
    salary: 2000
}

//var people = [joyObj, anilObj];
var people = [{
    name: 'joydip',
    id: 2,
    salary: 1000,
    print: function () {
        return 'Name: ' + this.name + ', Id: ' + this.id + ', Salary: ' + this.salary;
    }
}, {
    //value property
    name: 'anil',
    id: 1,
    salary: 2000,
    //functional property
    print: function () {
        return 'Name: ' + this.name + ', Id: ' + this.id + ', Salary: ' + this.salary;
    }
}];

var resultant = [];
for (var i = 0; i < people.length; i++) {
    var person = people[i];
    if (person.salary >= 2000) {
        resultant.push(person);
    }
}

for (var index = 0; index < resultant.length; index++) {
    var p = resultant[index];
    var info = p.print();
    console.log(info)
}
*/
