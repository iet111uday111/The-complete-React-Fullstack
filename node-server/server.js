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

app.get('/', (req, res) => {
    console.log(req);
    res.send('<h1>Sucess</h1>')
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