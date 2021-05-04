/*
function sortNumberArrayInAscendingOrder(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            var temp = 0;
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

var numbers = [1, 3, 4, 2, 6, 8, 5, 7, 0, 9];
var ascendingInputArray = [...numbers];
sortNumberArrayInAscendingOrder(ascendingInputArray);
console.log(ascendingInputArray)
console.log(numbers)
*/

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