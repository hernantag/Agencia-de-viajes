import {UI} from "../ui.js"

const objetoUI = new UI()
document.addEventListener("DOMContentLoaded",setupApp)

function setupApp(){
    addEventListenerViaje()
}
function addEventListenerViaje(){
    const ArrayViajes = document.querySelectorAll(".viajes-item")
    ArrayViajes.forEach(viaje => {
        viaje.addEventListener("mouseenter",crearInfo)
        viaje.addEventListener("mouseleave",borrarInfo)
    });
}
function crearInfo(e){
    objetoUI.construirInformacionViaje(e.target)
}
function borrarInfo(e){
    objetoUI.borrarInformacionViaje(e.target)
}