const datosBici = require('./datosBici');

let dhBici={
    bicicletas : datosBici
}

function buscarBici(id){
   let biciEncontrada = datosBici.filter(bicicleta => {
    return bicicleta.id == id
   })
if (biciEncontrada.length > 0){
    return biciEncontrada[0];
} else {return null;}
}

function venderBici(id){
    let biciEncontrada = buscarBici(id);
    if (biciEncontrada != null){
        biciEncontrada.vendida = true;
        return biciEncontrada
    } else {
        return ('Bicicleta no encontrada');
    }
}

function biciParaLaVenta(){
   let biciParaLaVenta = datosBici.filter(bicicleta =>{
    return bicicleta.vendida == false;
   })
return biciParaLaVenta
}
console.log(buscarBici(1));
console.log(venderBici(1));
console.log(biciParaLaVenta());

function totalDeVentas(){
    let vendidas = datosBici.filter(bicicleta=> bicicleta.vendida==true)
    let total= vendidas.reduce((acc,bici)=> acc + bici.precio, 0)
    return total
}

console.log(totalDeVentas())