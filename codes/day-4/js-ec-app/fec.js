var a;
a = 10;
console.log(window.a)
var person = {
    name: 'joydip',
    salary: 2000,
    print: function () {
        var test = 1234; //FEC
        //console.log(this.test)
        //this-->owner
        return this.name + ', ' + this.salary;
    }
}

var fn = function (val1, val2) {
    console.log(this)
    this.fnotherdata = 123;
    console.log(window.fnotherdata)
    var fnData = 300;
    console.log(fnData)
}
fn(1000, 2000);
console.log(person.print())