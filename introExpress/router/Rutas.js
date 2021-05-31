const express = require('express');
const router = express.Router(); //a simple way to configure the routes it is using router
const methods = require('../methods')
const User = require('../models/user')

router.get('/', (req, res) => {
    res.render("index", {titulo: "Este es el inicio"})
})

router.get('/about', (req, res)=> {
    res.render("about", {tituloAbout: "Presenta"}) //this variable tituloAbout it will be send to about.ejs
});

//login
router.get('/login', (req, res)=> {
    res.render("login") //this variable tituloAbout it will be send to login.ejs
});


router.post('/login', async(req, res)=>{
    //request body
    const {email, password } = req.body
    const hashedPassword = methods.getHashedPassword(password)
  
    //busqueda del usuario en la base de datos
    user = await User.findOne({email:email, password:hashedPassword})
    .then(user=>{
        if(user){
            const authToken = methods.generateAuthToken

            //store token auth
            methods.authTokens[authToken] = user
            //configurating  auth token on the cookies
            res.cookie('AuthToken', authToken)

            //redirect to home
            res.redirect('/students')
           
        }else{           
            res.render('login',{
                message: "El nombre o la contraseña no son validos",
                messageClass: 'alert-danger'
            })
        }
    })
})


//register
router.get('/register', (req, res)=> {
    res.render("register")
});

router.post('/register', async(req,res)=>
{
    try{
        //request body
        const {fullname, email, password, confirmPassword } = req.body

        //checko if passwords match
        if(password === confirmPassword){
            //evaluae if the record exist
            user = await User.findOne({email:email})
            .then(user=>{
                if(user){
                    console.log('ya existe una cuenta con este correo')
                    res.render('register',{
                        message: "El registro ya existe, intente con otra direccion",
                        messageClass: 'alert-danger'
                    })
                }else{
                    //encrypt password
                    //pasar los datos al modelo y guardar datos
                    const hashedPassword = methods.getHashedPassword(password)
                    const userDB = new User({'fullName': fullname, 'email':email, 'password':hashedPassword})
                    userDB.save()
                    console.log('se ha creado su cuenta')
                    
                    res.render('login',{
                        message: "El registro se ha completado, iniciar sesion",
                        messageClass: 'alert-success'
                    })
                }
            })
          
        }else{
            res.render('register',{
                message: "Las claves no coinciden",
                messageClass: 'alert-danger'
            })
        }

    }catch(error){
        console.log('Error', error)
    }   
})

//logout
router.get('/logout',(req,res)=>{
    res.clearCookie('AuthToken')
    return res.redirect('/')
})

module.exports = router;