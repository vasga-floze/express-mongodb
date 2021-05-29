const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const studentSchema =  new Schema({
    //define the structure that each document will have
    name: String,
    cod: String,
    course: String
});

//create model
const  Student = mongoose.model('Student', studentSchema);

module.exports = Student;