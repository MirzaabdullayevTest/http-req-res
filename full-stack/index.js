const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })

            fs.readFile(path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, data) => {
                    if (err) throw new Error
                    // console.log(data);
                    res.write(data)
                    res.end()
                }
            )
        }

        if (req.url === '/api/users') {
            fs.readFile(path.join(__dirname, 'views', 'users.html'),
                'utf-8',
                (err, data) => {
                    if (err) throw new Error
                    // console.log(data);
                    res.write(data)
                    res.end()
                }
            )
        }
    }

    if (req.method === 'POST') {
        if (req.url === '/api/person') {
            req.on('data', (data) => {
                const name = Buffer.from(data).toString().split('=').join(' ')
                // console.log(name);
            })
            res.end()
        }
    }
})

try {
    const port = 3000
    server.listen(port, () => {
        console.log(`Server working on port`, server.address().port);
    })

} catch (error) {
    console.log(error);
}