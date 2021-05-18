const { getResult } = require('./promise-code')

let promiseObj = getResult(10, 2);
//other jobs....
console.log(promiseObj)
// promiseObj
//     .then(
//         (data) => console.log(data),
//         (err) => console.log(err)
//     )
let resultData = undefined;
promiseObj
    .then(res => resultData = res) //promise resolved (as well as rejected)
    .catch(err => console.log(err)) //promise rejected only
    .finally(() => {
        console.log('in finally')
        console.log(resultData)
    })

//state: pending --> fulfilled (when resolve)/ rejected (reject is called)
//result: undefined --> value (when resolve)/ error (reject is called)
