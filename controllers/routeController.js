import viajes from  "../models/Viajes.js"
import testimonios from "../models/Testimonios.js"

const getInicio = async (req,res)=>{

    const arrayPromises = []
    arrayPromises.push(testimonios.findAll())
    arrayPromises.push(viajes.findAll())
    try {
        const resultados = await Promise.all(arrayPromises)

        res.render("inicio",{
            arrayTestimonios:resultados[0],
            arrayViajes:resultados[1],
            pagina:"Inicio"
        })
    } catch (error) {
        console.log(error)
    }
    
}

const getTestimonios = async (req,res)=>{ 
    const arrayTestimonios = await testimonios.findAll()
    res.render("testimonios",{
        pagina:"Testimonios",
        arrayTestimonios
    })
}
const guardarTestimonio = async (req,res)=>{
    const fecha = new Date()
    const {nombre,correo,mensaje} = req.body
    try {
        await testimonios.create({
            autor:nombre,
            correo,
            descripcion:mensaje,
            fecha_creacion:`${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()}`
        })
        res.redirect("/testimonios")
    } catch (error) {
        console.log(error)
    }
    
}
const  getViajes = async (req,res)=>{

    const listviajes = await viajes.findAll() 
    res.render("viajes",{
        pagina:"Viajes",
        listviajes:listviajes
    })
}
const getNosotros = (req,res)=>{
    res.render("nosotros",{
        pagina:"Nosotros"
    })
}
const getSlash = (req,res)=>{
    res.redirect("/inicio")
}
const getViajeEspecifico = async (req,res)=>{
    
    const {slug} = req.params
    try {
        const viaje = await viajes.findOne({where : {slug}})
        res.render("viaje",{
            pagina:slug,
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}


export {getInicio,getTestimonios,getViajes,getNosotros,getSlash,getViajeEspecifico,guardarTestimonio}
