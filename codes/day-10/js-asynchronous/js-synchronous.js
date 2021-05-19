
//function main() {
const fnFirst = () => console.log('First...')
const fnSecond = () => console.log('Second')
//const fnThird = () => console.log('Third')

const foo = () => {
    console.log('foo')
    fnFirst()
    fnSecond()
}
foo();
//}
//main()

// const firstButton = document.getElementById('first')
// const secondButton = document.getElementById('second')

// firstButton.addEventListener('click', fnFirst)
// secondButton.addEventListener('click', fnSecond)
// setTimeout(() => {
//     fnThird()
// }, 0)
// setTimeout(() => { fnFirst() }, 0)
// fnSecond()

