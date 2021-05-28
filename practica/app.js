
// Funciones de flecha
/* const sumarDos = (num1, num2) => (num1 + num2);

const result = sumarDos(20, 20)
console.log(result)

const mensaje = nombre => ('hola soy ' + nombre);
console.log(mensaje('Gabriela'));

const sumarleTres = (num = 1) => console.log('El resultado es: ' + num + 5)

sumarleTres(5); */


//template string
/* const numero =(num1, num2) => (`el numero es: ${num1 + num2}`)

console.log(numero(5, 9)) */

//objetos
/* const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true
}

console.log(mascota)
console.log(mascota.nombre)

mascota.id = 1
console.log(mascota)
mascota.tricks = ['dar la mano', 'coger comida en el aire']
console.log(mascota) */

//DESTRUCTURING OBJECTS
/* 
const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true,
    tricks: ['dar', 'nombre']
}

// const nombreMascota = mascota.nombre //esto mismo a continuacion:

const {edad} = mascota
console.log(edad)
*/

/* 
const web = {
    nombre: 'gabriela',
    links: {
        instagram: 'instagram/vasga-floze'
    },
    redesSociales:{
        youtube:{
            enlace: 'youtube.com/soloprueba',
            nombre: 'Gabriela Flores'
        }
    }
}

const enlaceYT = web.redesSociales.youtube.enlace //destructuring
console.log(enlaceYT)
const {enlace, nombre} = web.redesSociales.youtube //destructuring
console.log(nombre)
console.log(enlace) */

//FETCH API
const fetch = require('node-fetch');

/* fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res =>  res.json())
    .then (data =>  {
        console.log(data)
    }); */


// async await

/* const obtenerPokemones = async() =>{
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await res.json()
        //console.log(data)
        //const arrayNombres = data.results.filter(poke => poke.name === 'bulbasaur')
        const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur') //usando array.filter()
        console.log(arrayNombres)
    } catch(error){
        console.log(error);
    }
} 

obtenerPokemones();*/