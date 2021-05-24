//create a function which will be used
//to call any of the four functions

//which of the four functions will be called, pass that function as an argument to the 'calculate' function
// in order to call any of the four functions from calculate function, pass the necessary arguments too

const { add, subtract, multiply, divide } = require('./calculation')

//callback = (e,d)=>{}
//middleman
const calculate = (fnRef, x, y, callback) => {
    setTimeout(() => {
        try {
            let res = fnRef(x, y)
            callback(null, res);
            //return res;
        } catch (e) {
            //throw e;
            callback(e, null)
        }
    }, 1000)
}

//caller
const responseMethod = (error, result) => {
    if (error !== null) {
        console.log(error)
    }
    if (result !== null) {
        console.log(result)
    }
}
calculate(divide, 10, 0, responseMethod)
console.log('teaching')



