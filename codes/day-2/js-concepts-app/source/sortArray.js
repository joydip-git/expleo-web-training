
function sortInAscendingOrder(array, fn) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            var temp;
            var status = fn(array[i], array[j]);
            if (status > 0) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

var numbers = [1, 3, 4, 2, 6, 8, 5, 7, 0, 9];
var ascendingInputArray = [...numbers];
sortInAscendingOrder(ascendingInputArray, function (a, b) {
    return a - b;
});
console.log(ascendingInputArray)
//console.log(numbers)

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
var copyOfPeople = [{ ...people[0] }, { ...people[1] }, { ...people[2] }]
sortInAscendingOrder(copyOfPeople, function (person1, person2) {
    //return person1.name[0] > person2.name[0];
    //return person1.salary - person2.salary;
    return person1.id > person2.id;
})

console.log(copyOfPeople)

/*
function sortPeopleBySalary(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            var temp = null;
            // var current = array[i]
            // var other = array[j];

            if (array[i].salary > array[j].salary) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

var people = [{
    name: 'joydip',
    id: 1,
    salary: 2000
}, {
    name: 'anil',
    id: 2,
    salary: 1000
}]
var copyOfPeople = [{ ...people[0] }, { ...people[1] }]
//var copyOfPeople = [...people]
//console.log(people[0] == copyOfPeople[0])
//console.log(people == copyOfPeople)
sortPeopleBySalary(copyOfPeople);
console.log(copyOfPeople)



// var joydip = {
//     name: 'joydip',
//     id: 1,
//     salary: 1000
// };
// var copyOfJoydip = { ...people[0] }
// var copyOfAnil = { ...people[1] }
// var copyOfPeople = [copyOfJoydip, copyOfAnil];
*/


