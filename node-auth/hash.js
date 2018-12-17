const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');


bcrypt.genSalt(10, (err, salt) => {
    if(err) return next(err);
    bcrypt.hash('password', salt, (err, hash) => {
        if(err) return next(err);
        console.log(hash);
        
    })  
})


const user = {
    id: 1,
    token: MD5('abc123456').toString()
}

const id = '68237638263';
const secret = 'supersecret';
const receivedToken = 'eyJhbGciOiJIUzI1NiJ9.NjgyMzc2MzgyNjM.DgVZdGfQwVQZ0yLdOeU7M6YB7G2wVMB_gCLX8_VrF1U';
const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(receivedToken, secret);
console.log(token);
console.log(decodeToken);







