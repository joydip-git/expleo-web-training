var calcModule = require('./calculation');
var accountModule = require('./account')
// var joydipAccount = new account('Joydip', 1234, 10000)//{}--> owner of the account function currently
// console.log(joydipAccount)

calcModule.addFn(10, 29)
calcModule.subtractFn(10, 5)
calcModule.multiFn(12, 3)
calcModule.divFn(12, 3)

var joydipAccount = new accountModule.account('Joydip', 1234, 10000)
console.log(joydipAccount)

