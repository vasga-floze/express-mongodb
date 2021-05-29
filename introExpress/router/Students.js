const express = require('express');
const router = express.Router(); //using the middleware Router

//import module
const Student = require('../models/student')

router.get('/', async (req, res) =>{
    try {
        const studentsArrayDB = await Student.find();
        console.log(studentsArrayDB)

        //render students view
        res.render("students",{ 
            studentsArray: studentsArrayDB
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;