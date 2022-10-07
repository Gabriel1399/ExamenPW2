import Sequelize from "sequelize";
import db from "../config/db.js";

export const gerente = db.define('Gerente', {
    nombre: {
        type:Sequelize.STRING
    }, 
    ap_paterno:{
        type:Sequelize.STRING
    }, 
    ap_materno:{
        type:Sequelize.STRING
    },
    telefono:{
        type:Sequelize.STRING
    }
}, {timestamps:false});