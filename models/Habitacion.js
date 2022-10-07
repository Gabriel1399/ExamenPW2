import Sequelize from "sequelize";
import db from "../config/db.js";

export const habitacion = db.define('Habitacion', {
    piso: {
        type:Sequelize.STRING
    }, 
    nombre:{
        type:Sequelize.STRING
    }, 
    refrigerador:{
        type:Sequelize.BOOLEAN
    }
}, {timestamps:false});