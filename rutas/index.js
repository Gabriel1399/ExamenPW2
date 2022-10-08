import express from "express";
import {paginaInicio, paginaHoteles, paginaGerentes, paginaHabitaciones} from "../controller/paginasControlador.js";
import { listaGerentes, guardarGerentes, cambiarGerentes, eliminarGerentes } from "../controller/gerentesControlador.js";
import { listaHabitaciones, guardarHabitaciones, cambiarHabitaciones, eliminarHabitaciones } from "../controller/habitacionesControlador.js";
import {listaHoteles, guardarHoteles, cambiarHoteles, eliminarHoteles} from "../controller/hotelesControlador.js";


const rutas = express.Router();
rutas.get("/",paginaInicio);

rutas.get("/hoteles", paginaHoteles);
rutas.post("/hoteles", guardarHoteles)

rutas.get("/gerentes", paginaGerentes);
rutas.post("/gerentes", guardarGerentes);

rutas.get("/habitaciones", paginaHabitaciones);
rutas.post("/habitaciones", guardarHabitaciones);

rutas.get("/listagerentes", listaGerentes);
rutas.get("/modificarGer", cambiarGerentes);
rutas.get("/eliminar", eliminarGerentes);

rutas.get("/listahabitaciones", listaHabitaciones);
rutas.get("/modificarHab", cambiarHabitaciones);
rutas.get("/eliminar", eliminarHabitaciones);

rutas.get("/listahoteles", listaHoteles);
rutas.get("/modificarHot", cambiarHoteles);
rutas.get("/eliminar", eliminarHoteles);

export default rutas;