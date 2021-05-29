// const divide = (a, b) => {
//     return new Promise((resolve, reject) => {
//         try {
//             let res = a / b;
//             resolve(res)
//         } catch (error) {
//             reject(error)
//         }
//     })
// }
const divide = async (a, b) => {
    return a / b;
}
//divide(10, 2).then(r => console.log(r)).catch(e=>clg(e))
const divideAsync = async () => {
    let res = await divide(10, 2)
    console.log(res)
}
divideAsync()

const aFunc = async () => {
    return 'test';
}
// const aFunc = () => {
//     return new Promis((res, rej) => {

//     })
// }

aFunc().then(r => console.log(r))

