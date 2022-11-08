///////Ejercicios clase 6////////

function noParesDeContarImparesHasta(numero){
    contador = 0;
    for ( let i = 0 ; i <= numero; i++ ){
        if (i%2 != 0 && i!=0){
            contador+=1;;
        }
    }return contador;
}
console.log(noParesDeContarImparesHasta(9));

console.log('\n///////////Micro desafío 1///////////////////////\n');

let productos= ["heladera", "cocina", "estufa", "computadora", "celular", "tv"];
console.log("Los productos son: \n" + productos);

let primeroEliminado = productos.shift();
console.log("El primero eliminado es: \n" + primeroEliminado);
console.log("Los productos luego de la eliminación son: \n" + productos);

productos.push(primeroEliminado);
console.log("Los productos agregandole el eliminado al final: \n" + productos);

productos.push("lampara", "lavarropa");
console.log("Los productos agregandoles dos nuevos al final: \n" + productos);

console.log("La cantidad de elementos del array es: " + productos.length);

function buscarElemento(array, elemento){
    if (array.indexOf(elemento) !== -1){
        console.log("Producto encontrado");
    }else console.log ("El producto buscado no existe");
}
buscarElemento(productos, "parlante");

let separadosPorEspacios =productos.join(' ');
console.log("Los productos separados por espacios en blanco: " + separadosPorEspacios);

console.log("La cantidad de elementos de la cadena de texto es: " + separadosPorEspacios.length);

let reemplazarProducto = separadosPorEspacios.replace("heladera", "tablet");
console.log("Cadena de texto reemplazando un producto: " + reemplazarProducto);

let nuevoArray =reemplazarProducto.split(" ");
console.log("El nuevo array con cada uno de los productos como un elemento: \n");
console.log(nuevoArray);

console.log('\n///////////Micro desafío 2///////////////////////\n');

let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis","Thor: amor y trueno"];
let ultimoEliminado = peliculas.pop();
console.log("Se elimina " + ultimoEliminado);

let conMayusculas =ultimoEliminado.toUpperCase(); 
peliculas.unshift(conMayusculas);
console.log("Las peliculas con thor agregado al ppio:" + peliculas);

console.log('\n/////////////////////////////////\n');

let aEstrenar = ["Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar"];

let separadosComa = aEstrenar.join(",");
console.log("Separados con coma: "+ separadosComa);

aEstrenar.shift();
console.log("Elimino el primero: " + aEstrenar);

let concatenados = peliculas.concat(aEstrenar);
console.log("Concatenados: " + concatenados);


