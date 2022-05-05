const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/api/cars') {
        if (req.url === '/') {
            res.write('Welcome')
            res.end()
        }

        if (req.url === '/api/cars') {
            res.write(JSON.stringify(['Ford', 'BMW', 'Tesla']))
            res.end()
        }
    } else {
        res.write('Error not found status code 404 with api ' + req.url)
        res.end()
    }
})

server.listen(8000)
console.log(`Server listening with ${server.address().port}`);