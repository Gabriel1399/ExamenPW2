import { hotel } from "../models/Hoteles.js";
import { gerente } from "../models/Gerentes.js";
import { habitacion } from "../models/Habitaciones.js";

const paginaInicio = async (req, res) => {
  res.render("inicio", {
    pagina: "Inicio"
  });
};
const paginaHoteles = async (req, res) => {
  const gerentes = await gerente.findAll();
  res.render("hoteles", {
    pagina: "Agregar un Hotel",
    gerentes

  });
};
const paginaGerentes = async (req, res) => {
  res.render("gerentes", {
    pagina: "Agregar un Gerente"
  });
};
const paginaHabitaciones = async (req, res) => {
  const hoteles = await hotel.findAll();
  res.render("habitaciones", {
    pagina: "Agregar una Habitacion",
    hoteles
  });
};

export { paginaInicio, paginaHoteles, paginaGerentes, paginaHabitaciones };
