const { readFile, writeFile } = require('fs')
const add = (a, b) => console.log(a + b)
const print = (err, data) => {
    if (err)
        console.log(err)

    if (data) {
        writeFile('./copydata.txt', data, () => {
            console.log('done...')
        })
    }
}
readFile('./data.txt', print);
console.log('hello')
add(10, 20)

