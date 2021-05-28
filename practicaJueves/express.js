var express = require('express') //include the module
var app = express()//create an app, this has methodes, some templates and another some configurations

app.get('/', function(req, res){
    res.send('Hola mundo')
})

app.listen(8080)

