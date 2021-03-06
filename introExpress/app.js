const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methods = require('./methods')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//CookieParser for HTTP request
app.use(cookieParser())

//we inject the user request by reading the authToken from the cookies
app.use((req, res, next)=>{
  //get auth token from cookies
  const authTokens=req.cookies['AuthToken']

  //inject the user to the request
  req.user = methods.authTokens[authTokens];

  next();
});

const port = 8080;

//database connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbStudents',{useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=> console.log('Database successfully connected'))
  .catch(e=> console.log('Connection error', e))


//view engine
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');


//If there exists files in this folder, this will be read first
app.use(express.static(__dirname + '/public')); //Static file service in Express

//we call our routes
app.use('/', require('./router/Rutas'));
app.use('/students', require('./router/Students')); //call to students view

//if doesn't find a page it gonna show the errorPage
app.use('/', (req, res, next) => {
  res.status(404).render("errorPage")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});