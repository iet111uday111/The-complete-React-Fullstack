const express = require('express');
const bodyParser = require('body-parser');
const moongose = require('mongoose');

const app = express();

moongose.Promise = global.Promise;

moongose.connect('mongodb://localhost:27017/node-auth');

const { User } = require('./models/user');
app.use(bodyParser.json());




app.post('/api/user', (req, res) =>{
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    user.save((err, doc) => {
        if(err) return res.status(400).send(err);
        res.status(200).send(doc);

    })
})


const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Started on port ${port}`);
});