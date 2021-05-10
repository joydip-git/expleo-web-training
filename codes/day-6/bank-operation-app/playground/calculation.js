
function add(a, b) {
    var addResult = a + b;
    console.log(addResult)
}

function multiply(a, b) {
    console.log(a * b)
}

function subtract(a, b) {
    console.log(a - b)
}

function divide(a, b) {
    console.log(a / b)
}

//console.log(module)
/*
var exportableMembers = {
    addFn: add,
    subtractFn: subtract
}

module.exports = exportableMembers
*/
module.exports = {
    addFn: add,
    subtractFn: subtract,
    multiFn: multiply,
    divFn: divide
}
// console.log(module)
/**
 * module={
 *  path:'',
 *  file:'',
 *  root:object,
 *  children:[],
 *  exports:{
    addFn: add,
    subtractFn: subtract
}
 * }
 */