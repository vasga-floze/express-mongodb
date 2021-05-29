const express = require('express')
const app = express()
const port = 8080;

//view engine
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');


//If there exists files in this folder, this will be read first
app.use(express.static(__dirname + '/public')); //Static file service in Express

//we call our routes
app.use('/', require('./router/Rutas'));

//if doesn't find a page it gonna show th errorPage
app.use('/', (req, res, next) => {
  res.status(404).render("errorPage")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});