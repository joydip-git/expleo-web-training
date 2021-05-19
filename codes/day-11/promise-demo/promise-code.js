//const { readFile } = require('fs')
const getResult = (a, b) => {
    let promiseObjRef = new Promise((resolve, reject) => {
        //operation
        let res = a / b;
        if (res === Infinity) {
            reject('can not divide by zero')
        } else {
            resolve(res)
        }
    })
    return promiseObjRef;
}
module.exports = {
    getResult
}