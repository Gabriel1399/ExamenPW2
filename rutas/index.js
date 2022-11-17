import express from "express";
import { paginaInicio, paginaHoteles, paginaGerentes,paginaHabitaciones } from "../controller/paginasControlador.js";
import { guardarHoteles, listaHoteles, cambiarHoteles, eliminarHoteles } from "../controller/hotelesControlador.js";
import { guardarGerentes, listaGerentes, cambiarGerentes, eliminarGerentes } from "../controller/gerentesControlador.js";
import { guardarHabitaciones, listaHabitaciones, cambiarHabitaciones, eliminarHabitaciones } from "../controller/habitacionesControlador.js";

const rutas = express.Router();
rutas.get("/",paginaInicio);

rutas.get("/hoteles",paginaHoteles);
rutas.post("/hoteles",guardarHoteles);

rutas.get("/gerentes",paginaGerentes);
rutas.post("/gerentes",guardarGerentes);

rutas.get("/habitaciones",paginaHabitaciones);
rutas.post("/habitaciones",guardarHabitaciones);

rutas.get("/listahoteles",listaHoteles);
rutas.get("/modificarHot",cambiarHoteles);
rutas.get("/eliminarHot",eliminarHoteles);

rutas.get("/listagerentes",listaGerentes);
rutas.get("/modificarGer",cambiarGerentes);
rutas.get("/eliminarGer",eliminarGerentes);

rutas.get("/listahabitaciones",listaHabitaciones);
rutas.get("/modificarHab",cambiarHabitaciones);
rutas.get("/eliminarHab",eliminarHabitaciones);

export default rutas;