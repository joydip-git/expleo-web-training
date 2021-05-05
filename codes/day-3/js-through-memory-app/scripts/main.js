
/*console.log(x) //undefined
var x = 10;
console.log(x) //10
for (var i = 0; i < 2; i++) {
    var x = 20;
    console.log(x) //20
}
console.log(x) //20

//console.log(d) //error
d = 30;
console.log(d)//30

*/

//Immediately Invocable Function Expression (IIFE) --> pronounced as IIFY
//(function () {
//code
// })();


// (function () {
//     var a = 20;
//     console.log(a)
// })();
var x = 10;
var fnA = function (m, n) {
    console.log('start function fnA')

    var a = 10;
    var p;
    var fnB = function () {
        console.log('In function fnB')
        var b = 20;
        console.log(x)
        console.log(a)
        console.log(b)
    }
    console.log(x)
    //console.log(b)

    fnB();
}

function fnC() {
    console.log('start function fnC')

}

fnA(10, 20);
fnC();
//console.log(b)
//console.log(a)
console.log('global context')