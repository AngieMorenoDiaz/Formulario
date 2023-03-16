function mostrarMensaje(){
    console.log("Hicieron clink en el botón" + new Date().toLocaleTimeString())
}

let boton=document.getElementById("otroBoton");
boton.addEventListener("click", ()=>{
    console.log("Hicieron clink en el botón" + new Date().toLocaleTimeString())
});