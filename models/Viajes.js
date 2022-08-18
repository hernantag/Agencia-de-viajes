import sequelize from "sequelize";
import db from "../config/db.js";

 const viajes = db.define("viajes",
 {
    id_viaje: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    titulo: sequelize.STRING,
    precio: sequelize.DECIMAL,
    fecha_ida: sequelize.DATE,
    fecha_vuelta: sequelize.DATE,
    imagen:sequelize.STRING,
    descripcion:sequelize.STRING,
    disponible:sequelize.INTEGER,
    slug:sequelize.STRING,
})

export default viajes