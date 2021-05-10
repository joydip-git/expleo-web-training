//ES6
// let a = 10;
// for (let i = 0; i < 2; i++) {
//     let a = 20;
//     console.log(a)//20
// }
// console.log(a)//10

// const add = (a, b) => (a + b);

//ES5 ()
var a = 10;
for (let i = 0; i < 2; i++) {
    let _a = 20;
    console.log(_a)//20
}
console.log(a)//10

var add = function (a, b) {
    console.log(a + b)
}