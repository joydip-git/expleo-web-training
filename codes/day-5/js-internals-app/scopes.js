var a = 100;
var x = 100;
// while (a > 0) {
// console.log("2." + a)//undefined
// var a = 200;
// console.log("3." + a)//200
// }

function printHi() { //1. GEscope //2, it's own scope
    var y = 200;
    console.log(x)
    //console.log(this.a)
    console.log(this)
    console.log("2." + a)//undefined
    var a = 200;
    console.log("3." + a)//200
    this.m = 100;
    //var self = this;
    /*
        var fnB = function () { //1. own scope, 2. printHi, 3. global scope
            this.n = 200;
            console.log(this.m+this.n)
          //  console.log(self.m + this.n)
            console.log(this)
        }
        var boundFnB = fnB.bind(this)
        boundFnB();
        */
    //this fnB will be bound to the sme parent that of the paren execution context
    var fnB = () => {
        this.n = 200;
        console.log(this.m + this.n)
    }
    fnB();
}

function fnC() {

}

var obj = { val: 100, call: function () { console.log(this) } };
//obj.call();
//var c = obj.call;
//window.c();

console.log("1." + a)//100
var boundPrint = printHi.bind(obj);
boundPrint();//obj.print();
//printHi();
console.log("4." + a)//100