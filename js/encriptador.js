//***Seleccion del Boton Encriptar***
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar")
const btnDesencriptar = document.querySelector(".btn-desencriptar")


//***Boton de Encriptar 
btnEncriptar.addEventListener("click", e =>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replaceAll(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:'"``;,\u0300-\u036f']/g, "");

    if (texto == "") {
        aviso.style.background = "#6c8238";   
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "900";
        aviso.textContent = "El campo de Texto no debe estar vacio";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }
    else if (texto !== txt) {
        aviso.style.background = "#6c8238";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }
    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#6c8238";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minusculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1500);
    }
    else {
        texto = texto.replaceAll(/e/mg,'enter'); 
        texto = texto.replaceAll(/i/mg,'imes');
        texto = texto.replaceAll(/a/mg,'ai');
        texto = texto.replaceAll(/o/mg,'ober');
        texto = texto.replaceAll(/u/mg,'ufat');
    
        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();        
  
    }

});

//***Boton de Desencriptar 
btnDesencriptar.addEventListener("click", e =>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replaceAll(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:'"``;,\u0300-\u036f']/g, "");

    if (texto == "") {
        aviso.style.background = "#6c8238";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "900";
        aviso.textContent = "El campo de Texto no debe estar vacio";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }
    else if (texto !== txt) {
        aviso.style.background = "#6c8238";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }
    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#6c8238";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minusculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1500);
    }
    else {
        texto = texto.replaceAll(/enter/mg,'e'); 
        texto = texto.replaceAll(/imes/mg,'i');
        texto = texto.replaceAll(/ai/mg,'a');
        texto = texto.replaceAll(/ober/mg,'o');
        texto = texto.replaceAll(/ufat/mg,'u');
    
        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();        
    }
});

//***Boton de Copiar****// 
btnCopiar.addEventListener("click", e =>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");

});