const moongose = require('mongoose');

const userSchema = moongose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    }
});


const User = moongose.model('User', userSchema);

module.exports = { User };