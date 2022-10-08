import Sequelize from "sequelize";
import db from "../config/db.js";
import {habitacion} from "./Habitaciones.js";

export const hotel = db.define('hoteles', {
    id_htl: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type:Sequelize.STRING,
    }, 
    direccion:{
        type:Sequelize.STRING,
    }, 
    telefono:{
        type:Sequelize.STRING,
    },
    correo:{
        type:Sequelize.STRING,
    },
    id_grt: {
        type: Sequelize.INTEGER,
    }
}, {timestamps:false});

hotel.hasMany (habitacion,{
    foreignKey:'id_htl'
  });
  
  habitacion.belongsTo(hotel, {
    foreignKey: {
      name: "id_htl",
    },
  });
  