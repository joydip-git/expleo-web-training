const http = require('http')
//const readLine = process.stdin;
const writeLine = process.stdout;
const requestOptions = {
    host: 'localhost',
    port: '3001',
    method: 'GET'
}
const req = http.request(
    requestOptions,
    (res) => {
        console.log(`status code: ${res.statusCode}`)

        res.addListener('data', (respData) => {
            writeLine.write(respData)
        })
    })

req.addListener('error', (err) => {
    console.log(err)
})

req.end();
