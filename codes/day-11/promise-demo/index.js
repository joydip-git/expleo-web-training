const { getData, getDataPromise } = require('./promise-callback')

getData('./data.txt', (error, data) => {
    if (error)
        console.log(error)

    if (data) {
        console.log('callback data')
        console.log(data.toString())
    }
})

// let dataPromise = getDataPromise('./data.txt');
// dataPromise
//     .then(data => {
//         console.log('promise data')
//         console.log(data.toString())
//     })
//     .catch(err => console.log(err))
getDataPromise('./data.txt')
    .then(data => {
        console.log('promise data')
        console.log(data)
    })
    .catch(err => {
        console.log('promise error')
        console.log(err)
    })
console.log('waiting for data...')
