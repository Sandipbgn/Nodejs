const http = require('http');
let filesystem = require('fs');
const { buffer } = require('stream/consumers');
const { parse } = require('path');


const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);


    //res = response and req= request
    const url = req.url
    const method = req.method
    if (url === '/home') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Node App</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit" name= "valueofbox">Submit</button></form></body>')
        res.write('</html>');
        console.log('first if condition is executed')
        return res.end();
    }
    if (url === '/message' && method === 'POST') {

        const valueOfBox = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            valueOfBox.push(chunk);
            console.log(valueOfBox);
        });

        req.on('end', () => {
            const parsedValue = Buffer.concat(valueOfBox).toString();

            console.log(parsedValue);
            // const message = parsedValue.split('=')[1];

            filesystem.writeFileSync('file.txt', parsedValue);
            
        });
       console.log('hello print vayena :(');
        res.statusCode = 302;
        res.setHeader('Location', '/home');
        console.log('the code you wanted is executed')
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node App</title></head>')
    res.write('<body>This is my first web app.</body>')
    res.write('</html>')
    console.log('third if is executed')
    res.end();

});

server.listen(3000);

console.log(process.env.USER)