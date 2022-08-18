import {UI} from "./ui.js"

const objetoUI = new UI()
setupApp()

function setupApp(){
    document.querySelector("#i1").addEventListener("mouseenter",crearInfo)
    document.querySelector("#i1").addEventListener("mouseleave",borrarInfo)
}
function crearInfo(){
    objetoUI.construirInformacionViaje(1)
}
function borrarInfo(e){
    e.preventDefault()
    objetoUI.borrarInformacionViaje(1)
}

document.querySelector("#scrollx").addEventListener("scroll",pruebas)

function pruebas(e){
    const cantidadHijos = document.querySelector("#scrollx")
    console.log(cantidadHijos.querySelectorAll(".testimoniales-item").length)
    if(e.target.scrollLeft >= e.target.scrollWidth - 1200){
        console.log("cargando mas")
        setTimeout(()=>{
            cantidadHijos.innerHTML += `
        <div class="testimoniales-item">
        </div>
        <div class="testimoniales-item">     
        </div>
        <div class="testimoniales-item">
        </div>
        <div class="testimoniales-item">
        </div>
        <div class="testimoniales-item">
        </div>
        <div class="testimoniales-item">
        </div>`
        },1000)
        
    }
    console.log(e.target.scrollLeft)
  
}