//1.
function fnA() {
    console.log('fnA')
}

//2. 
var fnB = function () {
    console.log('fnB')
}

fnA(); //function name itself is an address to the function itself
fnB(); // calling through a variable which stores the reference of the function

function invoke(fnAddress) {
    //fnA() or fnB()
    fnAddress();
}

invoke(fnA)
invoke(fnB)

function filterData(arr, fnRef) {
    var final = [];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        var status = fnRef(element); //fnRef (argument??? return ????)
        //apply logic on that element of the array
        //if true then do the following:
        if (status)
            final.push(element);
    }
    return final;
}

//1. My own function
//client/caller
//source of data and logic
var numbers = [1, 2, 3, 4, 5];
// var result = filterData(numbers, function (num) {
//     return num % 2 == 0;
// })
numbers.sort(function (a, b) {
    return b - a;
})
console.log(numbers)

var result = numbers.filter(function (num) {
    return num % 2 == 0;
});
console.log(result)



/**
 * {
 *      0: 1,
 *      1: 2,
 * ..........
 * }
 */