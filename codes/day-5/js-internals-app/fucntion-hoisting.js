//hoisting (creation of memory)
console.log(a) //undefined
var a = 10;//declaration and assignment
//console.log(x)
x = 100 //assignment

// while (a > 5) {
//     var n = 400
//     console.log(a)
//     a--
// }

fnA(); //fnA

//function declaration (this is hoisted: put in heap memory and readily available for your call )
function fnA() {
    console.log('fnA')
    var m = 300;
    this.data = 1000;
}

//fnB(); //fnB
//creation phase: fnB = undefined
//variable declaration (to which you are assigning a function reference)
//function expression
var fnB = function () {
    console.log('fnB')
}


fnA()//fnA
fnB()//fnB