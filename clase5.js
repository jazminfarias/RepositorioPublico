///////Ejercicios clase 5////////
console.log('\n///////////Micro desafío 1///////////////////////\n');

let tipoVehiculo = " ";
let diasAlquiler = 0;
let sillaBebe = false;

function totalAPagar(tipoVehiculo, diasAlquiler, sillaBebe) {
    totalAPagar = 0;
    mensaje = " ";

    switch (tipoVehiculo) {
        case (tipoVehiculo = "Compacto"):
            totalAPagar = 14000;
            break;
        case (tipoVehiculo = "Mediano"):
            totalAPagar = 17000;
            break;
        case (tipoVehiculo = "Camioneta"):
            totalAPagar = 28000;
            break;
    }

    if (diasAlquiler > 0) {
        totalAPagar = diasAlquiler * totalAPagar;
    }

    if (sillaBebe == true) {
        totalAPagar = totalAPagar + (diasAlquiler * 1200);
        mensaje = "\nAdemás, usted solicitó la silla para niños, con un costo adicional de $1200 por día.";
    }
    return console.log("Estimado cliente: en base al tipo de vehículo " + tipoVehiculo + " alquilado, considerando los " + diasAlquiler + " días utilizados, el monto total a pagar es de $" + totalAPagar + mensaje);

}
totalAPagar("Mediano", 1,true);

console.log('\n///////////Micro desafío 2///////////////////////\n');


