"use strict"
 const nombre = document.getElementById("name");
 const email = document.getElementById("email");
 const password = document.getElementById("password");
 const form = document.getElementById("formulario");
 const parrafo = document.getElementById("warnings");

 form.addEventListener("submit", e=>{
    e.defaultPrevented()
    let warnings = "";
    let entrar = false;
    let requerimientos = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,3}$/;
    parrafo.innerHTML = "";

    if(nombre.length < 6){
        warnings += `El nombre no es valido <br>`
        entrar = true;
    }
    else if(!requerimientos.test(email.valueOf)){
        warnings += `El Email no es valido <br>`
        entrar = true;
    }
    else if(password.valueOf.length < 6){
        warnings += `La contraseña no es valida <br>`
        entrar = true;
    }
    else if(entrar){
        parrafo.innerHTML = warnings;
    }

 })

 