import express from "express"
import {guardarTestimonio,getInicio,getTestimonios,getViajes,getNosotros,getSlash,getViajeEspecifico} from "../controllers/routeController.js"

const router = express.Router()

router.get("/",getSlash)
router.get("/inicio",getInicio)
router.get("/nosotros",getNosotros)
router.get("/testimonios",getTestimonios)
router.get("/viajes",getViajes)
router.get("/viajes/:slug",getViajeEspecifico)
router.post("/testimonios",guardarTestimonio)

export default router