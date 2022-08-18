import {UI} from "../ui.js"

const objetoUI = new UI()
document.addEventListener("DOMContentLoaded",setupApp)
function setupApp(){
    document.querySelector(".form-testimonio").addEventListener("keyup",validarFormulario)
}

function validarFormulario(e){
    const correo = document.querySelector("#correo").value
    const nombre = document.querySelector("#nombre").value
    const mensaje = document.querySelector("#mensaje").value
    if((correo.trim() == "" || correo.length < 10) ||(nombre.trim() == "" || nombre.length < 10)|| (mensaje.trim() == "" || mensaje.length < 10)){
        objetoUI.deshabilitarBotonFormulario()
        return
    }
    objetoUI.habilitarBotonFormulario()
}