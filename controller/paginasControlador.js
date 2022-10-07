import { hotel } from '../models/Hotel.js';
import { gerente } from '../models/Gerente.js';
import { habitacion } from '../models/Habitacion.js';

const paginaInicio=(req,res) =>{
    res.render("inicio", {
        pagina: "Inicio",
    });
}

const paginaHoteles = (req, res) => {
    res.render("hotel", {
        pagina: "Hotel"
    });
}

const paginaGerentes = (req, res) => {
    res.render("gerente", {
        pagina: "Gerente",
    });
}

const paginaHabitaciones = (req, res) => {
    res.render("habitacion", {
        pagina: "Habitacion"
    });
}

export{
    paginaInicio,
    paginaHoteles,
    paginaGerentes,
    paginaHabitaciones,
}

