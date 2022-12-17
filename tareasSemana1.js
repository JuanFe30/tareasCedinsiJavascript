"use strict"

//Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onzas

let litros = Number(prompt("ingrese los litros a convertir"));

const centilitros = 100;
const decilitros = 10;
const galones = 0.26;
const onzas = 33.8;
let conversion = 0;

let operacion1 = prompt("digite la unidad a convertir: 1.Centilitros 2.Decilitros 3.Galones 4.Onzas ")

if (operacion1 == "1" || operacion1 == "2" || operacion1 == "3" || operacion1 == "4"){

    switch (operacion1) {
        case "1":
            conversion = litros * centilitros;
            
            break;
        case "2":
            conversion = litros * decilitros;
            
            break;
        case "3":
            conversion = litros * galones;
            
            break;
        case "4":
            conversion = litros * onzas;
            
            break;
    
        default:
            alert("Conversion fallida");
            break;          
    }
    alert("El resultado de la conversion es: "+conversion);
}else{
    alert("conversion fallida")
}


// Realizar el algoritmo que realice las 4 operaciones básicas para dos números de entrada

let operacion = prompt("Digite el numero de la operacion a realizar: 1.Multiplicacion 2.Division 3.Resta 4.Suma")


if (operacion == "1" || operacion == "2" || operacion == "3" || operacion == "4"){
    let num1 = Number(prompt("Digite el primer numero:"));
    let num2 = Number(prompt("Digite el segundo numero:"));
    let res = 0;

switch (operacion) {
    case "1":
        res = num1 * num2;
        break;
    case "2":
        res = num1 / num2;
        break;
    case "3":
        res = num1 - num2;
        break;
    case "4":
        res = num1 + num2;
        break;

    default:
        alert("Operacion invalida")
        break;        
    }
    alert("El resultado de la operacion es :"+res);
}else{
    alert("La operacion es invalida")
}

//Realizar el algoritmo que convierta grados centígrados en Fahrenheit y viceversa.

let primerunid = prompt("Digite el numero de la unidad que quiere convertir: 1.Celsius 2.farenheit ")
let valor1 = Number(prompt("Ingrese el valor a convertir"));
const cels = 0;
const faren = 32;
const var1 = 9/5;
const var2= 5/9;
let res = 0;

if(primerunid == "1" || primerunid == "2"){
    switch (primerunid) {
        case "1":
            res = (valor1 * var1) + faren;
            break;           
        case "2":
            res = (valor1 - faren) * var2;
            break;           
    
        default:
            alert("Operacion invalida")
            break;
    }
    alert("El resultado de la conversion es"+res);
}else{
    alert("Operacion invalida");
}

/*Realizar el algoritmo que calcule el valor a pagar por algunos galones de gasolina 
si sabemos que cada centilitro cuesta 25 pesos. 
Imprimir el valor a pagar y la cantidad de gasolina despachada en litros*/

let galones1 = Number(prompt("Ingrese los galones que desea pagar"));
const valCen = 25;
const unidadCen= 454.6;
let ans = 0;

if(galones1){
    galones1 = (galones1 * unidadCen) * valCen;
    ans = galones1;

}else{
    alert("Operacion invalida")
}

alert("El valor a pagar en pesos es: "+ans);

/*Realizar un algoritmo que calcule el salario de un empleado según los siguientes parámetros.
a.Si gana menos de 699.999, Descuento de pensión =2%, y más un Aux. de transporte= 6%.
b. Si gana entre 700.000 y 999.999, Descuento de pensión =4%, Subsidio familiar = 12.000,sino le pagan el mismo salario.
c. Si gana más del millón Descuento de pensión =6%*/

let salario = Number(prompt("Ingrese el salario"));
let descPension = 0;
const subFamiliar = 120000;

if(salario < 700000){
    descPension = salario * 0.02;
    let auxTrans = salario * 0.06;
    salario = salario - descPension;
    salario = salario + auxTrans;
}else{
    if(salario < 1000000){
        descPension = salario * 0.04;
        salario = salario - descPension;
        salario = salario + subFamiliar;
    }else{
        descPension = salario * 0.06;
        salario = salario - descPension;
    }
}
alert(salario)

