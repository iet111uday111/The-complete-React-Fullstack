const express = require('express');
const app = express();
const fs = require('fs');
const querystring = require('querystring');
const bodypaser = require('body-parser');
const urlencodeParser = bodypaser.urlencoded({extended: true});
const jsonParser = bodypaser.json();

app.use('/css', express.static(__dirname + '/public/css'));

const PORT = process.env.PORT || 3000;
let jsonData = {
    name: 'Udayaditya Singh',
    age: '28'
}

let html = fs.readFileSync('./index.html');

/**
 * This method is like the standard app.METHOD() methods, 
 * except it matches all HTTP verbs.
 */
app.all('*', (req, res,next) => {
    console.log(`Someone requested for the ${req.url}`);
    // res.cookie('cookieName', 'cookie')
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

app.get('/user', (req, res) =>{
    let HTML = fs.readFileSync(`${__dirname}/querystring.html`);
    res.send(`${HTML}`);
});

app.get('/user-post', (req, res) =>{
    let HTML = fs.readFileSync(`${__dirname}/jsonpost.html`);
    res.send(`${HTML}`);
});

app.post('/enteruser',urlencodeParser, (req, res) =>{
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        console.log(firstName);
        console.log(lastName);
        res.send(200);
        
});

app.post('/enteruser-post',jsonParser, (req, res) => {
    console.log("inside enteruser-post",req.body);
    res.sendStatus(200);
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

/**
 * Body Parser
In short; body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body as something easier to interface with. You don't need it per se, because you could do all of that yourself. However, it will most likely do what you want and save you the trouble.

To go a little more in depth; body-parser gives you a middleware which uses nodejs/zlib to unzip the incoming request data if it's zipped and stream-utils/raw-body to await the full, raw contents of the request body before "parsing it" (this means that if you weren't going to use the request body, you just wasted some time).

After having the raw contents, body-parser will parse it using one of four strategies, depending on the specific middleware you decided to use:

bodyParser.raw(): Doesn't actually parse the body, but just exposes the buffered up contents from before in a Buffer on req.body.

bodyParser.text(): Reads the buffer as plain text and exposes the resulting string on req.body.

bodyParser.urlencoded(): Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST) and exposes the resulting object (containing the keys and values) on req.body. For comparison; in PHP all of this is automatically done and exposed in $_POST.

bodyParser.json(): Parses the text as JSON and exposes the resulting object on req.body.

Only after setting the req.body to the desirable contents will it call the next middleware in the stack, which can then access the request data without having to think about how to unzip and parse it.
 */