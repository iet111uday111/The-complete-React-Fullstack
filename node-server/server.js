const http = require('http');
const fs = require('fs');
const PORT = 3000;
const hostname = 'localhost';

let html = fs.readFileSync('./index.html');
let jsonData = {
    name: 'Udayaditya Singh',
    age: '28'
}

/**
 * Sending Plain Text
 */
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     res.end('whatever');  
// });
/**
 * Sending HTML
 */
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.end(html);  
// });

/**
 * Sending JSON
 */
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(html);
    } else if (req.url === '/api/user') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(jsonData));
    }else{
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end('Not Found')
    }
});

server.listen(PORT, hostname, () => {
    console.log(`Server is listening on http://${hostname}:${PORT}`);
});




