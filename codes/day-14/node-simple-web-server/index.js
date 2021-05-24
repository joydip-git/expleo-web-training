//creating an HTTP server
const http = require('http')
const fs = require('fs')

const port = 3000;

//this callback will be executed when server receives request from any client
const handler = (req, res) => {

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html')
    // //res.end('Hello everyone')
    // res.end('<h1>Hello everyone </h1>')
    fs.readFile('./data1.txt', (err, data) => {
        if (err) {
            res.statusCode = 404
            res.end(`error: ${err}`)
        }
        if (data) {
            res.statusCode = 200
            res.end(data.toString())
        }
    })
}
const server = http.createServer(handler)

//this callback will be executed when server starts running and issues a listener to listen to port number 3000
const runCallback = () => {
    console.log(`server is running at port ${port} `)
}
server.listen(port, runCallback)