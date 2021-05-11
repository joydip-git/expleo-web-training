//ES6 (2015)
let a = 10;
for (var index = 0; index < 2; index++) {
    let a = 20;
    console.log(a)//20
}
console.log(a)//10

//ES6 (2015)
const x = 10;
//x = 20;
console.log(x)

// function sayHi() {
//     this.hiMessage = "Hi..."
//     var self = this;
//     var sayHello = function () {
//         this.helloMessage = 'Hello...'
//         console.log(self.hiMessage + ' ' + this.helloMessage)
//         //console.log(this.hiMessage + ' ' + this.helloMessage)
//     }
//     //sayHello = sayHello.bind(this)
//     sayHello()
// }
// new sayHi()

//arrow opeartor (ES6 - 2015)
function sayHi() {
    this.hiMessage = "Hi..."
    var sayHello = () => {
        this.helloMessage = 'Hello...'
        console.log(this.hiMessage + ' ' + this.helloMessage)
    }
    sayHello()
}
new sayHi()