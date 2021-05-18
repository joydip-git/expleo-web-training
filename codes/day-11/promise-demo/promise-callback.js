const { readFile, fstat } = require('fs')
const getData = (path, callback) => {
    // setTimeout(() => readFile(path, callback), 1000);
    readFile(path, callback)
}
const getDataPromise = (path) => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     // let res = 10 / 2;
        //     // if (res === Infinity) {
        //     //     reject('do not divide by zero')
        //     //     return;
        //     // }
        //     // resolve(res)
        //     readFile(path, (err, data) => {
        //         if (err) {
        //             reject(err)
        //             return;
        //         }
        //         resolve(data)
        //     })
        // }, 1000)
        readFile(path, (err, data) => {
            if (err) {
                reject(err)
                return;
            }
            resolve(data)
        })
    });
}
module.exports = {
    getData,
    getDataPromise
}

