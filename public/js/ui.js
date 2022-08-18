export class UI{
    constructor(){
    }
    construirInformacionViaje(viajeDiv){
        this.borrarInformacionViaje()
        const div = document.createElement("div")
        div.classList.add("viaje-background")
        const span = document.createElement("span")
        span.innerText = viajeDiv.getAttribute("data-title")
        div.appendChild(span)
        viajeDiv.firstChild.style.filter ="blur(1.5px)"
        viajeDiv.firstChild.firstChild.style.transform ="scale(1.1)"
        viajeDiv.appendChild(div)
        setTimeout(()=>{
            div.style.height = "12%"
        },20)
        setTimeout(()=>{
            span.style.opacity = 1
        },20)
        
    }
    borrarInformacionViaje(){
        const divActivo = document.querySelector(".viaje-background")
        if(divActivo){
            divActivo.parentElement.firstChild.style.filter ="none"
            divActivo.parentElement.firstChild.firstChild.style.transform ="scale(1)"
            document.querySelector(".viaje-background").remove()
        }
    }
    deshabilitarBotonFormulario(){
        const btnRegTestimonio = document.querySelector("#btn-reg-testimonio")
        btnRegTestimonio.disabled = true
        btnRegTestimonio.classList.add("disabled")
    }
    habilitarBotonFormulario(){
        const btnRegTestimonio = document.querySelector("#btn-reg-testimonio")
        btnRegTestimonio.disabled = false
        btnRegTestimonio.classList.remove("disabled")
    }
}