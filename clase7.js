///////Ejercicios clase 7////////
function cantidadDeMesesConGanancia(unPeriodo) {
    let contador = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
      let mes = unPeriodo[i];
         if (mes>0) contador++;
    }
    return contador;
  }
  
  console.log(cantidadDeMesesConGanancia([10, -10, 2, 100])); 

  console.log('\n/////////////////////////////////\n');

  function asientosDisponibles(array,asientoDeseado){
    if (array.includes(asientoDeseado)){
        console.log("Felicitaciones, el asiento número " + asientoDeseado + " está disponible");
    }else console.log("Lo sentimos, el asiento número " + asientoDeseado + " está ocupado, pero aún quedan " + (array.length) + " asientos disponibles");
}

asientosDisponibles([15, 28, 44, 45, 70], 16);  

console.log('\n/////////////////////////////////\n');

function laClaveSecreta(letras){
  let clave = "";
  for(let i=letras.length-1; i>=0; i--){
      if(letras[i]!="*") clave+=letras[i];
  }
  return clave;
}

console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]));

console.log('\n/////////////////////////////////\n');

function reporteDePasajeros(cantidadEstaciones){
  let pasajeros = 200;
  switch (cantidadEstaciones){
    case  (1):
      return ("En la estación " + cantidadEstaciones + " hay " + (pasajeros+20) + " pasajeros arriba del tren");
      break;
    case (2):
      return ("En la estación " + cantidadEstaciones + " hay " + (pasajeros+40) + " pasajeros arriba del tren");
      break;
    case (3):
      return ("En la estación " + cantidadEstaciones + " hay " + (pasajeros+60) + " pasajeros arriba del tren");
      break;
    case (4):
      return ("En la estación " + cantidadEstaciones + " hay " + (pasajeros+80) + " pasajeros arriba del tren");
      break;
    case (5):
      return ("En la estación " + cantidadEstaciones + " hay " + (pasajeros+120) + " pasajeros arriba del tren");
      break;
    default :"ingrese una cantidad correcta";
  }
}

console.log(reporteDePasajeros(4));

console.log('\n///////////Micro desafío 1///////////////////////\n');

let operaciones = [2000,1000,-500,3000,-2500];

function calculos(array){
    let saldoDepositos = 0;
    let saldoRetiros = 0;
    let saldoTotal = 0;
  for (let i = 0; i < array.length; i++) {
       if (array[i]>0){
        saldoDepositos = saldoDepositos + array[i];
        saldoTotal = saldoTotal + array[i];
       }else (array[i]<0)
        saldoRetiros = saldoRetiros + array[i];
        saldoTotal = saldoTotal - array[i];
  } return "El monto total de los depósitos es de: $" + saldoDepositos + ".\nEl monto total de los retiros es de: $" + saldoRetiros + ".\nPor lo tanto, su saldo actual en la cuenta es de: $" + saldoTotal + ".";
}
console.log(calculos(operaciones));

console.log('\n//////////////////////////////\n');

function calculosYNombre(array, nombre, apellido){
  let saldoDepositos1 = 0;
  let saldoRetiros1 = 0;
  let saldoTotal1 = 0;
for (let i = 0; i < array.length; i++) {
     if (array[i]>0){
      saldoDepositos1 = saldoDepositos1 + array[i];
      saldoTotal1 = saldoTotal1 + array[i];
     }else (array[i]<0)
      saldoRetiros1 = saldoRetiros1 + array[i];
      saldoTotal1 = saldoTotal1 - array[i];
} return "Estimad@ " + nombre + " " + apellido + "\nEl monto total de los depósitos es de: $" + saldoDepositos1 + ".\nEl monto total de los retiros es de: $" + saldoRetiros1 + ".\nPor lo tanto, su saldo actual en la cuenta es de: $" + saldoTotal1 + ".";
}
console.log(calculosYNombre(operaciones, "Jazmin", "Farias"));

console.log('\n///////////Micro desafío 2///////////////////////\n');

function tablas(){
  let multiplicando = 1;
  let multiplicador = 1;
 while (multiplicando <=10){
    while (multiplicador <=10){
      let resultado = multiplicando * multiplicador;
      console.log(multiplicando + " * " + multiplicador + " = " + resultado);
      multiplicador +=1;
    }multiplicador = 1;
    multiplicando += 1;
  }}
tablas();

console.log('\n///////////Micro desafío Extra///////////////////////\n');

function mostrarSiguientes(valor){
    for (let i = valor; i < (valor + 11); i++){
      console.log(i);
    }
}
mostrarSiguientes(20);

//Imprimir los números entre el 1 y el 57, saltando de tres en tres.
console.log('\n//////////////////////////\n');

function mostrar1A57 (){
  for (let i = 1; i <= 57 ; i+=3){
    console.log(i);
  }
}
mostrar1A57();
console.log('\n//////////////////////////\n');

function sumatoria0a100(){
  let numero = 0;
  let sumatoria = 0;
  while (numero<= 100){
    sumatoria += numero;
    numero++;
  }return sumatoria;
}
console.log(sumatoria0a100());
console.log('\n//////////////////////////\n');

function letrasMayuscula (string){
  console.log(string.toUpperCase());

}
letrasMayuscula("practicando el uso de los ciclos o bucles");

//Crear una función que reciba como parámetro un array de números positivos. Tendrá
//la responsabilidad de retornar un nuevo array pero sólo con los valores pares.

function devolverPares(array){
  for (i=0 ; i < array.length ; i++){
    arrayPares=[];
    while ((array[i] % 2) ==0){
    arrayPares =+ [array[i]];
    array[i]++;
    }
  }return arrayPares;}
console.log(devolverPares([202,201,303,300,1,8]));