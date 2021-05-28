// const http = require('http');

// //basic server
// http.createServer(function(req, res){
//     console.log('Peticion')
//     console.log(req.url)//bring the url that we are calling

//     //answer to the request
//     res.write('Hola, HTTP nodeJS')

//     res.end();

// }).listen(8080);

http.createServer(rutas).listen(8080)

//create routes
function rutas(req, res){
    console.log('Peticion')

    switch(req.url){
        case '/home':
            res.write('Welcome')
            res.end();
            break
        default:
            res.write('Error 404')
            res.end()
            break
    }
}
