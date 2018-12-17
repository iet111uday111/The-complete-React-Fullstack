const moongose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_I = 10;

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

userSchema.pre('save', function(next){
    var user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(SALT_I, (err, salt) => {
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })  
        })
    }else{
        next();
    }
});

userSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if(err) throw cb(err);
        cb(null, isMatch);
    });
}

const User = moongose.model('User', userSchema);

module.exports = { User };