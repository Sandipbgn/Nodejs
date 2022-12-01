const http = require('http');
let filesystem = require('fs');


const baato = require('./routes')
const arkoBaato = baato.handler;

const server = http.createServer(arkoBaato)
    // console.log(req.url, req.method, req.headers);


    //res = response and req= request}
    console.log(baato.sometext)

server.listen(3000);

console.log(process.env.USER)