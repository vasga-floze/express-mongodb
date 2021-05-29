const express = require('express')
const app = express()
const port = 8080;

//view engine
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');


//If there exists files in this folder, this will be read first
app.use(express.static(__dirname + '/public')); //Static file service in Express


app.get('/', (req, res) => {
    res.render("index", {titulo: "Este es el inicio"})
})

app.get('/about', (req, res)=> {
    res.render("about", {tituloAbout: "Este es un mensaje dinamico de about"}) //this variable tituloAbout it will be send to about.ejs
});

//if doesn't find a page it gonna show th errorPage
app.use('/', (req, res, next) => {
  res.status(404).render("errorPage")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});