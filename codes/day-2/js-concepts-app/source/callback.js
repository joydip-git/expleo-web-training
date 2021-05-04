var add = function (first, second) {
    return (first + second);
}

var subtract = function (first, second) {
    return (first - second);
}

function calculate(operation, x, y) {
    var result = operation(x, y);
    console.log(result)
}

calculate(add, 10, 20)
calculate(subtract, 10, 5)

//console.log(typeof add)

// var x;
// console.log(typeof x)