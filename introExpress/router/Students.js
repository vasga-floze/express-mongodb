const express = require('express');
const router = express.Router(); //using the middleware Router

//import module
const Student = require('../models/student')

router.get('/', async (req, res) =>{
    try {
        if (req.user){
            const studentsArrayDB = await Student.find();
            console.log(studentsArrayDB)
            res.render('students',{
                studentsArray: studentsArrayDB,
                userName: req.user.fullName
            })
            console.log(req.user)
        }else{
            res.render('login',{
                message: "Por favor inicie sesion",
                messageClass: 'alert-danger'
            })
        }
        
    } catch (error) {
        console.log(error)
    }
});

router.get('/create', (req, res)=>{
    res.render('create')
});


//Create a document
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
});


//Read a single document
//id is a dinamic variable
router.get('/:id', async(req, res)=>{
    //this variable id it going to read from req
    const id = req.params.id;

    try {
        const studentDB = await Student.findOne({ _id: id });
        console.log(studentDB)

        //painting the result in a view
        res.render('detail', {
            student: studentDB,
            error: false //allows to verify the existence of the id
        })

    } catch (error) {
        console.log(error)
        res.render('detail', {
            error: true,
            message: 'No se encuentra el id seleccionado'
        })
    }
});


//delete a document
router.delete('/:id', async(req, res)=> {
    const id = req.params.id

    try {
        const studentDB = await Student.findByIdAndDelete({ _id: id})

        if (studentDB) {
            res.json({
                status : true,
                message : 'Eliminado!'
            });
        } else {
            res.json({
                status : false,
                message : 'No ha sido posible eliminar'
            });
        }
    } catch (error) {
        console.log(error)
    }
});

//edit a document (PUT)
router.put('/:id', async(req, res) =>{
    const id = req.params.id;
    const body = req.body;

    try {
        const studentDB = await Student.findByIdAndUpdate(id, body, {useFindAndModify: false});
        console.log(studentDB)

        res.json({
            status : true,
            message : 'El documento ha sido editado satisfactoriamente!'
        });

    } catch (error) {
        console.log(error)
        res.json({
            status : false,
            message : 'El documento no se ha podido editar!'
        });
    }
})


module.exports = router;