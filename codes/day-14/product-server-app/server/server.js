//create a HTTP server which responds with JSON data containing your name and salary

const http = require('http')
const port = 3001;
//const baseUrl = 'http://localhost:3000/productservice'
const server = http.createServer((req, res) => {

})

server.listen(port, () => {
    console.log(`server is running at port ${port} `)
})