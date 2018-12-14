const express = require('express');
const app = express();
const fs = require('fs');
const querystring = require('querystring');

const PORT = process.env.PORT || 3000;
let jsonData = {
    name: 'Udayaditya Singh',
    age: '28'
}

let html = fs.readFileSync('./index.html');

app.use('/css', express.static(__dirname + '/public/css'));
app.all('*', (req, res,next) => {
    console.log(`Someone requested for the ${req.url}`);
    res.cookie('cookieName', 'cookie')
    next();
});

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <link type="text/css" rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                    <h6>Getting html from server</h6>
            </body>
        </html>
    `)
});

app.get('/api/user', (req, res) => {
    res.send(jsonData)
});

app.get('/api/:user/:id', (req, res) => {
    let user = req.params.user;
    let id = req.params.id;
    console.log(id);
    console.log(user);
    
    
    res.send('<h1>Hello</h1>')
});

app.get('/api/car', (req, res) => {
    let brand = req.query.brand;
    let year = req.query.year;
    res.send({
        brand,
        year
    })
});

app.listen(PORT,() => {
    console.log(`Server is listenning at ${PORT}`);
});