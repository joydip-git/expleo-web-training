const { add, subtract, multiply, divide } = require('./calculation')


//middleman
//resolve: passes a function which puts the promise object in 'fulfilled' state
//reject: passes a function which puts the promise object in 'rejected' state
//two internal properties: state (pending->fulfilled/rejected) and result(value/error)
const calculate = (fnRef, x, y) => {
    //creating Promise with executor function
    let promiseObj = new Promise((resolve, reject) => {
        //executor function body
        try {
            let res = fnRef(x, y)
            resolve(res)
        } catch (e) {
            reject(e)
        }
    });
    return promiseObj;
}

let promiseRef = calculate(divide, 10, 5);
promiseRef
    .then(res => console.log(res))
    .catch(error => console.log(error))

console.log('teaching')