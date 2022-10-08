import { hotel } from '../models/Hoteles.js';
import { gerente } from '../models/Gerentes.js';
import { habitacion } from '../models/Habitaciones.js';

const paginaInicio=(req,res) =>{
    res.render("inicio", {
        pagina: "Inicio",
    });
}

const paginaHoteles = (req, res) => {
    res.render("hoteles", {
        pagina: "Hoteles"
    });
}

const paginaGerentes = (req, res) => {
    res.render("gerentes", {
        pagina: "Gerentes",
    });
}

const paginaHabitaciones = (req, res) => {
    res.render("habitaciones", {
        pagina: "Habitaciones"
    });
}

export{
    paginaInicio,
    paginaHoteles,
    paginaGerentes,
    paginaHabitaciones,
}

