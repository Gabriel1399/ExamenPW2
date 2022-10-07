import Sequelize from "sequelize";
import db from "../config/db.js";

export const hotel = db.define('Hotel', {
    nombre: {
        type:Sequelize.STRING
    }, 
    direccion:{
        type:Sequelize.STRING
    }, 
    telefono:{
        type:Sequelize.STRING
    },
    correo:{
        type:Sequelize.STRING
    }
}, {timestamps:false});