const express = require('express')
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const router = require('./routes')
const methods = require('./methods')

const app = express()

//support for URL-encoded bodies
app.use(bodyParser.urlencoded({extended:true}))

//CookieParser for HTTP request
app.use(cookieParser())


//we inject the user request by reading the authToken from the cookies
app.use((req, res, next)=>{
    //get auth token from cookies
    const authTokens=req.cookies['AuthToken']

    //inject the user to the request
    req.user = methods.authTokens[authTokens];

    next();
})

//define rendering engine
app.engine('hbs', exphbs({
    extname: '.hbs'
}))

app.set('view engine', 'hbs')


//path file usage
app.use('/',router)

app.listen(8080)