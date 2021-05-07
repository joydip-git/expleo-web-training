function fnA() {
    //this-->window/obj
    this.m = 100;
    //fnB()
    var self = this;
    function fnB() {
        //this-->window
        this.n = 200;
        //console.log(this.m + this.n)
        console.log(self.m + this.n)
    }
    //?.fnB()
    fnB();
    //fnC()
    var fnC = function () {
        console.log(this)
        //this-->window/obj
        this.p = 300;
        console.log(this.m + this.p)
    }
    //?.fnC()
    var fnCBound = fnC.bind(this)
    fnCBound();

    // var fnD = function () {
    var fnD = () => {
        console.log(this)
        this.q = 400;
        console.log(this.m + this.q)
    }
    fnD();
}
var obj = { x: 1 };
//??.fnA()
(fnA.bind(obj))(); //obj<--fnA()
//this-->window