import express from "express"
import router  from "./routes/index.js"
import db from "./config/db.js"
import dotenv from "dotenv/config"
const app = express()



db.authenticate()
    .then(()=>{ console.log("conectado")})
    .catch(()=>{ console.log("astilla")})

app.set('view engine', 'pug')
const port = process.env.PORT || 4000
app.use(express.urlencoded({extended: true}))

app.use("/",router)
app.use(express.static('public'))

app.listen(port,()=>{
    console.log(`Escuchando en puerto ${port}`)
})
