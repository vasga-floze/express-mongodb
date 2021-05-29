const express = require('express');
const router = express.Router(); //using the middleware Router

router.get('/', (req, res) =>{
    //render students view
    res.render("students",{ 
        //this is a static array
        studentsArray:[
            {id : 1, name: 'Vasti Flores', cod: 'SMIS003119', course: 'English'},
            {id : 2, name: 'Gabriela Flores', cod: 'SMIS054618', course: 'Database'},
            {id : 3, name: 'Santiago Flores', cod: 'SMIS215619', course: 'Programming'},
            {id : 4, name: 'Mateo Flores', cod: 'SMIS356118', course: 'Electronic'}
        ]
    })
})

module.exports = router;