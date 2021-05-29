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
});

router.get('/create', (req, res)=>{
    res.render('create')
});

router.post('/', async(req, res)=>{
    const body = req.body
    try {
        /*
        //this works but there is a shorter way to do the same
        const studentDB = new Student(body)
        await studentDB.save()*/

        await Student.create(body); //this is the shorter way to do it

        //console.log('new student: ' + studentDB)
        res.redirect('/students');//this redirect to the user to a another page

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;