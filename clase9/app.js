const fs = require('fs');
const path = require ('path');


const ruta = path.join(__dirname, './peliculas.js');
let pelis = fs.readFileSync(ruta, 'utf-8');
console.log(pelis);

const rutaMensaje = path.join(__dirname, './mensaje.txt');
let mensaje = fs.readFileSync(rutaMensaje, 'utf-8');
console.log(mensaje);