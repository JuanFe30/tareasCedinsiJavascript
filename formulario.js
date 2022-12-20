"use strict"
//PRUEBAS FALLIDAS

/*const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
let mensaje = document.getElementById("mensajeError")

function validacion(campo){
    if(campo.value == ""){
        campo.classList.add("Error");
        mensaje.innerHTML = "<p>Error</p>"
        return false;
    }
}

function enviar(){
    validacion(nombre);
    validacion(email);
    validacion(pass);
}*/

/*const email = document.getElementById("email");

document.getElementById('email').addEventListener('input', function enviar(campo) {
    campo = Event.target;
    valido = document.getElementById('emailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "incorrecto";
    }
});

enviar(email);*/

/*const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const  expresiones  =  {
	usuario : / ^ [ a-zA-Z0-9 \_ \- ] { 4,16 } $ / ,  // Letras, numeros, guion y guion_bajo
	nombre : / ^ [ a-zA-ZÀ-ÿ \s ] { 1,40 } $ / ,  // Letras y espacios, pueden llevar acentos.
	contraseña : / ^ . { 4,12 } $ / ,  // 4 a 12 dígitos.
	correo : /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
	telefono : / ^ \d { 7,14 } $ /  // 7 a 14 numeros.

}

const validarFormulario = (e)=>{
    switch (e.target.name){
        case "nombre":
            if(expresiones.usuario.test(e.target.value)){
                
            }else{

            }
        break;
        case "email":
            console.log("Funciona")
        break;
        case "password":
            console.log("Funciona")
        break;
    }
}

inputs.forEach((input) =>{
    input.addEventListener("keyup",validarFormulario);
    input.addEventListener("blur",validarFormulario);
})

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
});*/


const emails = document.getElementById("email_form");
const contraseñas = document.getElementById("contraseña_form");
const mensajeError = document.getElementById("MensajeDeError");

function validacion(campo){
    if (campo.value == "") {
        campo.classList.add("error")
        mensajeError.innerHTML = "<p>!Error¡</p>"
        return false
        
    }
}

/*validacion(emails);
validacion(contraseñas);*/

function enviar(){
    validacion(emails);
    validacion(contraseñas);
   
}

alert("Profe hice varios intentos de validacion pero no di con el tema siempre tuve algun error, te agradezco si puedes corregirme")


 