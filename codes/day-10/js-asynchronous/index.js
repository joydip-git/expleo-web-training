// const showPlaces = (arr) => {
//     arr.forEach((place) => {
//         console.log(place)
//     })
// }
// const places = ['bangalore', 'chennai']
// showPlaces(places)
function main() {
    const fsModule = require('fs')

    const addFn = (a, b) => console.log(a + b)
    const subFn = (a, b) => console.log(a - b)
    // setTimeout(() => {
    //     subFn(10, 5)
    // }, 0)
    const show = (err, data) => {
        if (err) {
            console.log(err)
        }
        if (data) {
            console.log(data.toString())
        }
    }
    // const getData = () => {
    //     setTimeout(() => {
    //         const data = fsModule.readFileSync('./data.txt')
    //         console.log(data.toString())
    //         fsModule.readFile('./somedata.txt', show)
    //     }, 5000)
    // }
    //getData();
    fsModule.readFile('./somedata.txt', show)
    fsModule.readFile('./data.txt', show)
    addFn(10, 20)
    console.log('end of code')
}
main()