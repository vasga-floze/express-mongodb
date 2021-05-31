const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const userSchema = new Schema({
    fullName: String,
    email: String,
    password: String
})

//create module
const User = mongoose.model('User', userSchema)

module.exports=User