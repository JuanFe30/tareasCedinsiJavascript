"use strict"

//Realizar un programa que permita generar 100 números e imprimir solo los números pares.

for(let i=0; i <= 100; i+=2){
    console.log(i);
}

//Realizar un programa que permita sumar los 150 primeros números.

let numeros = 150;
let suma = numeros*(numeros+1)/2;

alert(`La suma de los primeros 150 numeros es ${suma}`);

//Leer 10 precios de productos y calcular cuánto cuestan los 10 productos.

let productos = 10;
let precios = [];
let suma1 = 0;

for(let i = 0; i < productos; i++){
    precios[i] = [Number(prompt(`Digite el precio del producto numero ${i+1} en dolares`))];   
}

precios.forEach(function(numero){
    return suma1 = parseInt(suma1) + parseInt(numero);
})
alert(`El precio total de todos los productos es $${suma1} dolares`);

//Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó,
//dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5.

let numNotas = 12;
let nombre = prompt("Nombre del estudiante");
let aprovadas = [0];
let reprovadas = [0];

for(let index = 0; index < numNotas; index++){
    let notas = prompt(`${nombre} digita tu ${index+1} nota`)
    if(notas == 0 || notas == 1 || notas == 2 || notas == 3 || notas == 4 || notas == 5){
        reprovadas [0]++;
    }
    else if(notas == 6 || notas == 7 || notas == 8 || notas == 9 || notas == 10){
        aprovadas [0]++;
    }
    else{
        alert(`${nombre} digitaste una nota invalida`)
        break;
    }
}

alert(`${nombre} aprovaste ${aprovadas} materias y reprovaste ${reprovadas} materias`);

//Leer n cantidad de notas de un estudiante e imprimir por pantalla

let estudiante1= prompt(`Digita tu nombre`)
let cantidadNotas = prompt(`¿Cuantas notas deseas imprimir?`);
let notas1 = [];

for(let e = 0; e < cantidadNotas; e++){
    notas1[e] = [Number(prompt(`${estudiante1} digita la ${e+1} nota`))]
}

document.write(`${estudiante1} tus notas son las siguientes:  <b style=color:red>${notas1}</b><br><br>`);

//Leer n cantidad números y determinar cantidad de impares, imprimir
//cantidad de impares.

let secuencia = 10;
let numeracion = [];

for(let ind = 0; ind < secuencia; ind++){
    numeracion[ind] = [Number(prompt(`Digite el numero ${ind+1}`))]
}

const impares = numeracion.filter (x=> x%3 === 0).length;

alert(`Los numeros impares son: ${impares}`);


//Leer n cantidad de sueldos de empleados y determinar el sueldo más bajo,
//imprimir los sueldos y el sueldo más bajo.


let secuencia1 = 5;
let sueldos = [];

for(let inde = 0; inde < secuencia1; inde++){
    sueldos[inde] = [Number(prompt(`Digite su sueldo`))]
}

let min = Math.min(...sueldos);

document.write(`Lista de sueldos: <b>${sueldos}</b><br>
                Sueldo mas bajo: <b style=color:red>${min}</b>`)



