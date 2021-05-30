const express = require('express');
const router = express.Router(); //a simple way to configure the routes it is using router

router.get('/', (req, res) => {
    res.render("index", {titulo: "Este es el inicio"})
})

router.get('/about', (req, res)=> {
    res.render("about", {tituloAbout: "Presenta"}) //this variable tituloAbout it will be send to about.ejs
});

module.exports = router;