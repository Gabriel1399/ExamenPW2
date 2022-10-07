import express from "express";
import {paginaInicio, paginaHoteles, paginaGerentes, paginaHabitaciones} from "../controller/paginasControlador.js";


const rutas = express.Router();
rutas.get("/",paginaInicio);
rutas.get("/hotel", paginaHoteles);
rutas.get("/gerente", paginaGerentes);
rutas.get("/habitacion", paginaHabitaciones);

export default rutas;