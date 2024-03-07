const http = require('http');
const hostname = '192.168.1.106';
const port = 3000;
const server = http.createServer((req,res) => {
    res.statusCode = 200;

    res.setHeader('Content-type', 'Text/plain');

    res.end('<h1>Hola mundo</h1>');

});

server.listen(port, hostname, () => {

    console.log('El servidor está ejecutando en http ://${Hostname}:${port}/')
});