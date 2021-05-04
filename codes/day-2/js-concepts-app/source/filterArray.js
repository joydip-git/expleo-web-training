//OddLogic
// var isOdd = function (num) {
//     return num % 2 != 0 ? true : false;
// }
//arrow operator
var isOdd = (num) => num % 2 != 0;

//EvenLogic
// var isEven = function (num) {
//     return num % 2 == 0;
// }

// var isEven = (num) => {
//     if (num % 2 == 0)
//         return true;
//     else
//         return false;
// }
var isEven = num => num % 2 == 0;

//Greater logic
var isGreatherThanFive = function (num) {
    return num > 5;
}


function filterData(inputArray, predicate) {
    var result = [];
    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i];
        var status = predicate(element);
        if (status) {
            result.push(inputArray[i])
        }
    }
    return result;
}

//source of data
var numbers = [1, 3, 2, 5, 4, 6, 7, 8, 0, 9]
//pass source of data and logic
//var filtered = filterData(numbers, isGreatherThanFive);
// var filtered = filterData(numbers, function (num) {
//     return num > 3;
// });
var filtered = filterData(numbers, (num) => num % 2 != 0);

console.log(filtered)

var people = [{
    name: 'joydip',
    id: 1,
    salary: 2000
}, {
    name: 'anil',
    id: 2,
    salary: 1000
}, {
    name: 'sunil',
    id: 3,
    salary: 3000
}]

var filteredBySalary = filterData(people, function (person) {
    return person.salary >= 2000;
})

var filteredById = filterData(people, function (person) {
    return person.id >= 2;
})

console.log(filteredBySalary)
console.log(filteredById)

var final = numbers.filter(function (num) {
    return num % 2 == 0;
})

console.log(final)

// numbers.sort(function (x, y) {
//     return x - y;
// })


