const getData = () => {
    const url = 'http://localhost:4000/productservice'
    let promiseObj = fetch(url)
    promiseObj
        .then(data => data.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
module.exports = { getData }