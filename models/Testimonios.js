import sequelize from "sequelize";
import db from "../config/db.js"

const testimonios = db.define("testimonios",
 {
    id_testimonio: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    autor: sequelize.STRING,
    descripcion: sequelize.STRING,
    fecha_creacion: sequelize.DATE,
    correo:sequelize.STRING
})

export default testimonios