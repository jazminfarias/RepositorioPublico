//////Ejercitacion ////////
console.log('\n///////////Ejercitacion///////////////////////\n');

    let bicicletaA = {
        rodado: 28,
        marca: "Mountain Bike"
    }
    let bicicletaB = {
        rodado: 24,
        marca: "Aurora"
    }
    
    let bicicletaConRodadoGrande = {rodado: 0, marca: ''}
    
    bicicletaA.rodado>bicicletaB.rodado ? (bicicletaConRodadoGrande = bicicletaA) : (bicicletaConRodadoGrande = bicicletaB);
    
    console.log("La bicicleta con  mayor rodado es la " + bicicletaConRodadoGrande.marca );
    console.log("El rodado de la bicicleta de mayor rodado es de " + bicicletaConRodadoGrande.rodado);

///////Ejercicios clase 4////////
console.log('\n///////////Micro desafío 1///////////////////////\n');

let perfil = 'Administrador';

if (perfil == 'Administrador' || perfil == 'administrador' || perfil == 'ADMINISTRADOR'){
    console.log ('Usted tiene todos los privilegios de uso del sistema');
}else if (perfil == 'Asistente'|| perfil == 'asistente' || perfil == 'ASISTENTE'){
    console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos');
}else if (perfil == 'Invitado'|| perfil == 'invitado' || perfil == 'INVITADO'){
    console.log('Usted sólo tiene permisos de consultar datos');
}else if (perfil == ' '){
    console.log ('Debe especificar el perfil del usuario');
}else{
    console.log('Debe especificar un perfil válido');}

console.log('\n///////////Micro desafío 2///////////////////////\n');

let pagoMes= 1000;
let consumoKWH= 301;
let pagoConAumento = pagoMes + (pagoMes*0.2);

consumoKWH > 300? console.log('Debido a que su hogar tuvo un consumo de ' + consumoKWH + 'kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $' + pagoConAumento)
:  console.log('Debido a que su hogar tuvo un consumo de ' + consumoKWH + ', se le mantendrá el subsidio, por lo que el total a pagar será de $' + pagoMes);


console.log('\n///////////Micro desafío 3///////////////////////\n');

let palabra = 'ventana';

switch (palabra){
    case (palabra = 'perro'):
        console.log('dog');
        break;
    case (palabra = 'gato'):
        console.log('cat');
        break;
    case (palabra = 'puerta'):
        console.log('door');
        break;
    case (palabra = 'ventana'):
        console.log('window');
        break;
    case (palabra = 'mesa'):
        console.log('table');
        break;
    default :
        console.log('La palabra ingresada es incorrecta');
    }

    console.log('\n///////////Micro desafío 4///////////////////////\n');

let num1= 10;
let num2= 2;
let operacion = 'multiplicar';

switch(operacion){
    case (operacion = 'sumar'):
        console.log('El resultado de sumar ' + num1 + ' + ' + num2 + ' es: ' + (num1-num2));
        break;
    case (operacion = 'restar'):
        console.log('El resultado de restar ' + num1 + ' - ' + num2 + ' es: ' + (num1-num2));
        break;  
    case (operacion = 'multiplicar'):
        console.log('El resultado de multiplicar ' + num1 + ' * ' + num2 + ' es: ' + (num1*num2));
        break;  
    case (operacion = 'dividir'):
        console.log('El resultado de dividir ' + num1 + ' / ' + num2 + ' es: ' + (num1/num2));
        break;
    default :
        console.log('Las operaciones aceptadas son: sumar - restar- multiplicar- dividir');  

}