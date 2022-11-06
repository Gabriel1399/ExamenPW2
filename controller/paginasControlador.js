import { hotel } from '../models/Hoteles.js';
import { gerente } from '../models/Gerentes.js';
import { habitacion } from '../models/Habitaciones.js';
import { MisDatos } from '../models/MisDatos.js';
import db from '../config/db.js';

const paginaInicio=(req,res) =>{
    res.render("inicio", {
        pagina: "Inicio",
    });
}

const paginaHoteles = async (req, res) => {
    const info = await db.query(
        "select nombre as dato1, id_grt as dato2 from Gerentes where id_grt not in(select id_grt from Hoteles)"
    ,{
        model:MisDatos,
        mapToModel: true
    });

    res.render("hoteles", {
        pagina: "Hoteles",
        infos:info
    });
}

const paginaGerentes = (req, res) => {
    res.render("gerentes", {
        pagina: "Gerentes",
    });
}

const paginaHabitaciones = async (req, res) => {
    const info = await db.query(
        "select nombre as dato3, id_htl as dato4 from Hoteles"
    ,{
        model:MisDatos,
        mapToModel: true
    });

    res.render("habitaciones", {
        pagina: "Habitaciones",
        infos:info
    });
}

export{
    paginaInicio,
    paginaHoteles,
    paginaGerentes,
    paginaHabitaciones,
}

