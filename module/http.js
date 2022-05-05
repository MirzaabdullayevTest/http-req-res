const http = require('http') // object

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.method === 'GET') {
        if (req.url === '/' || req.url === '/api/books') {
            if (req.url === '/') {
                res.writeHead(200, {
                    'Content-type': 'text/html'
                })
                res.write('<h1> Server is responced </h1>')

                res.end('<form action="/create/book" method="POST"> <label for="">Book name</label> <br> <input name="bookName" type="text"> <input type="submit"> </form>')
            }

            if (req.url === '/api/books') {
                res.write(JSON.stringify(['Atomic Habits', 'Harry potter', 'Shaytanat']))
                res.end()
            }

        } else {
            res.write('Error not found 404')
            res.end()
        }
    } else if (req.method === 'POST') {
        const body = []

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        req.on('data', (data) => {
            body.push(Buffer.from(data));
        })

        req.on('end', () => {
            const msg = body.toString().split('=')[1]
            const arr = msg.split('+')
            const heading = arr.join(' ')

            res.end(`<h1>${heading}</h1>`)
        })

    }
})  // server

server.listen(3000)

console.log(`Server working with port ${server.address().port}...`);