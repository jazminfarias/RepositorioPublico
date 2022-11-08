const fs = require('fs');
const path = require ('path');

const ruta = path.join(__dirname, './bicicletas.json');
let datosBici = JSON.parse(fs.readFileSync(ruta, 'utf-8'));

module.exports = datosBici;

