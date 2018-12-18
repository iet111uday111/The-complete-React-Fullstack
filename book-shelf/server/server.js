const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/config').get(process.env.NODE_ENV);

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

app.use(bodyParser.json());
app.use(cookieParser());

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server rinning on ${port} port.`);
})