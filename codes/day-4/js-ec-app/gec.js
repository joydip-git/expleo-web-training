// (function () {
//console.log(x) //error: x is not defined
x = 100; //assignment
console.log(window.x) //100

console.log(window.a) //undefined
var a = 10; //declaration and assignment
var a;
a = 10;
console.log(a) //10

for (var i = 0; i < 2; i++) {
    var b;
    b = 20;
    console.log(window.b) //20
}
console.log(a) //20
// })();