/*
const add = (a, b) => console.log(a + b)
const sub = (a, b) => console.log(a - b)

// add(10, 20)
// sub(10, 5)
// const calculate = (opFn, x, y) => {
//     opFn(x, y)
// }
// calculate(add, 10, 20)
// calculate(sub, 10, 5)
const sayHi = () => console.log('hi....')
const btn1 = document.getElementById('btn1')
console.log(btn1)
btn1.addEventListener('click', sayHi)
console.log('hello')
add(102, 34)
*/
const loadScript = (src, callback) => {
    const scriptTag = document.createElement('script');
    scriptTag.src = src;

    scriptTag.onload = () => callback(null, scriptTag)
    scriptTag.onerror = () => callback(new Error(`script load error for ${src}`), null)
    document.body.append(scriptTag);
}

loadScript('./loadablescript.js', (err, script) => {
    if (err !== null) {
        alert(err)
    }
    if (script !== null)
        alert(`cool...the script file ${script.src} has been loaded properly`)
})