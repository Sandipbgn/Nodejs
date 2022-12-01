const filesystem = require('fs')


const baatohandler = (req, res) => {

    const url = req.url
    const method = req.method
    if (url === '/home') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Node App</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit" name= "valueofbox">Submit</button></form></body>')
        res.write('</html>')
        console.log('first if condition is executed')
        return res.end()
    }
    if (url === '/message' && method === 'POST') {

        const bodyofbox = []

        req.on('data', (chunk) => {
            console.log(chunk)
            bodyofbox.push(chunk)
        })

        req.on('end', () => {
            const parsedValue = Buffer.concat(bodyofbox).toString()

            console.log(parsedValue)
            // const message = parsedValue.split('=')[1];
            filesystem.writeFileSync('file.txt', parsedValue)

        })
        console.log('hello print vayena :(')
        res.statusCode = 302
        res.setHeader('Location', '/home')
        console.log('the code you wanted is executed')
        return res.end()
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node App</title></head>')
    res.write('<body>This is my first web app.</body>')
    res.write('</html>')
    console.log('third if is executed')
    res.end()
}


module.exports = {
    
handler : baatohandler,
sometext: ' k xa vai yo chai aafaile lekhya text ho hai'

}