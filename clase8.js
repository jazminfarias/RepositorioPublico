console.log('\n///////////Micro desafío 1///////////////////////\n');
let cursos = [["html5", 4000], ["css3", 5000], ["javascript", 1000], ["react", 7000], ["nodejs", 15000]];

let cursosAlumno = ["HTML5", "JAVASCRIPT", "CSS3", "REACT"];

function totalApagar (cursos, cursosAlumno){
    let acum = 0;
    for (let i = 0; i < cursosAlumno.length; i++){
       
        for (let j = 0; j < cursos.length; j ++){
            if ( cursos[j][0].toUpperCase() == cursosAlumno[i]){
                acum += cursos[j][1];
            }
        }
    }
    return acum;
}

function mensaje(nombre, apellido, cursos, cursosAlumno, funcion ){
    let total = funcion(cursos, cursosAlumno);
    console.log("Estimado " + nombre + " " + apellido + ", en función de los cursos seleccionados: \n");
    
    cursosAlumno.forEach(function (valorRecorrer,indice)   {
        return console.log(indice+1 + ".- " + valorRecorrer);
    })

    console.log("\n")
    console.log("El monto total a pagar es de: $" + total);
    console.log("Bienvenido a la gran aventura Digital House");

}

// CASOS DE PRUEBA
mensaje("Amir", "Bartilone", cursos, cursosAlumno, totalApagar);

console.log('\n///////////Micro desafío 2///////////////////////\n');

// DECLARACION DE NOTAS DE CURSOS EN FORMA DE STRINGS
let graduadosHTML5 = "30 45 25 34 18 23 16 50 72 70";
let graduadosCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJAVASCRIPT = "70 65 58 45 23 57 34 17 72";
let graduadosNODEJS = "45 56 73 34 65 72 70 32";

// CONVERTIR A ARRAYS LOS STRINGS DE NOTAS
let graduadosHTML5array = graduadosHTML5.split(" ");
let graduadosCSS3array = graduadosCSS3.split(" ");
let graduadosJAVASCRIPTarray = graduadosJAVASCRIPT.split(" ");
let graduadosNODEJSarray = graduadosNODEJS.split(" ");


function calcularPromedioCurso(arrayHTML5, arrayCSS3, arrayJAVASCRIPT, arrayNODEJS, cursoSeleccionado ){
   let promedio = 0;
   let totalNotas = 0;
    switch(cursoSeleccionado){
        case 1: 
                promedio = arrayHTML5.reduce((totalNotas, nota) => totalNotas += parseInt(nota),0);
                promedio = promedio / arrayHTML5.length;
                mensaje = "El promedio del curso HTML5 es: "+ promedio;
                break;
        case 2: 
                promedio = arrayCSS3.reduce((totalNotas, nota) => totalNotas += parseInt(nota),0);
                promedio = promedio / arrayCSS3.length;
                mensaje = "El promedio del curso CSS3 es: "+ promedio;
                break;
        case 3:
                promedio = arrayJAVASCRIPT.reduce((totalNotas, nota) => totalNotas += parseInt(nota),0);
                promedio = promedio / arrayJAVASCRIPT.length;
                mensaje = "El promedio del curso JAVASCRIPT es: "+ promedio;
                break;
        case 4:
                promedio = arrayNODEJS.reduce((totalNotas, nota) => totalNotas += parseInt(nota),0);
                promedio = promedio / arrayNODEJS.length;
                mensaje = "El promedio del curso NODE JS es: "+ promedio;
                break;
        default: mensaje = "Por favor, seleccionar un número comprendido entre 1 y 4. \n 1 = HTML5 \n 2 = CSS3, \n 3 = JAVASCRIPT \n 4 = NODEJS";
  
    }
    return mensaje;
}

// CASOS DE PRUEBA
console.log("Prueba HTML5");
console.log(calcularPromedioCurso(graduadosHTML5array,graduadosCSS3array,graduadosJAVASCRIPTarray,graduadosNODEJSarray,1));
console.log("\n");
console.log("Prueba CSS3");
console.log(calcularPromedioCurso(graduadosHTML5array,graduadosCSS3array,graduadosJAVASCRIPTarray,graduadosNODEJSarray,2));
console.log("\n");
console.log("Prueba JAVASCRIPT");
console.log(calcularPromedioCurso(graduadosHTML5array,graduadosCSS3array,graduadosJAVASCRIPTarray,graduadosNODEJSarray,3));
console.log("\n");
console.log("Prueba NODE JS");
console.log(calcularPromedioCurso(graduadosHTML5array,graduadosCSS3array,graduadosJAVASCRIPTarray,graduadosNODEJSarray,4));
console.log("\n");
console.log("Prueba curso inexistente: ");
console.log(calcularPromedioCurso(graduadosHTML5array,graduadosCSS3array,graduadosJAVASCRIPTarray,graduadosNODEJSarray,5));
console.log("\n");