//create a HTTP server which responds with JSON data containing your name and salary

const http = require('http')
const port = 3001;

const server = http.createServer((req, res) => {
    console.log('request received')
    console.log(req.headers)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end(JSON.stringify({ name: 'joy', salary: 1000 }))
})

server.listen(port, () => {
    console.log(`server is running at port ${port} `)
})