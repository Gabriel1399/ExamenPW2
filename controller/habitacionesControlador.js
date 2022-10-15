import {habitacion} from "../models/Habitaciones.js";
import { hotel } from "../models/Hoteles.js";
import { gerente } from "../models/Gerentes.js";
const guardarHabitaciones = async(req,res)=>{
    const{id_hbt, piso, nombre, refrigerador, id_htl} = req.body;
    const errores = [];
    if(piso.trim()===""){
        errores.push({mensaje: "El piso no debe ser vacio"});
    }
    if(nombre.trim()===""){
        errores.push({mensaje: "El nombre no debe ser vacio"});
    }
    if(refrigerador.trim()===""){
        errores.push({mensaje: "El refrigerador no debe ser vacio"});
    }
    if(id_htl.trim()===""){
        errores.push({mensaje: "El id_htl no debe ser vacio"});
    }
    if (errores.length>0){
        res.render("habitaciones",{
            pagina:"Habitaciones",
            errores,
            piso,
            nombre,
            refrigerador,
            id_htl
        });
    } else {
        console.log(id_hbt);
        if(id_hbt > 0){
            //Actualizar
            console.log("actualiza");
            try{
                await habitacion.update({
                    piso,
                    nombre,
                    refrigerador,
                    id_htl,
                },{where: {id_hbt:id_hbt}});
                res.redirect('/listahabitaciones');
            } catch (error){
                console.log(error);
            }

        } else{
            //Almacenar en la base de datos
            try{
                await habitacion.create({
                    piso,
                    nombre,
                    refrigerador,
                    id_htl,
                });
                res.redirect('/habitaciones');
            } catch (error){
                console.log(error);
            }
        }
        
    }
};

const listaHabitaciones = async (req, res) => {
    const habitaciones = await habitacion.findAll({
        attributes: ["id_hbt", "piso", "nombre", "refrigerador", "id_htl"],
        include: {
            model: hotel,
            required: true,
        }
    });

    res.render("listaHabitaciones", {
        pagina: "Habitaciones",
        habitaciones
    });
};

const cambiarHabitaciones = async (req, res) => {

    console.log('Listo '+req.query.id_hbt)
    try{
        const hab=await habitacion.findByPk(req.query.id_hbt)
        console.log(hab);
        //const {correo, imagen, opinion} =req.body;
        const errores = [];
        res.render("habitaciones", {
            pagina: "Habitaciones",
            errores, 
            id_hbt:hab.id_hbt,
            piso:hab.piso,
            nombre:hab.nombre,
            refrigerador:hab.refrigerador,
            id_htl:hab.id_htl
        });
    } catch(error){
    console.log(error);
    }
};

const eliminarHabitaciones =async(req, res) => {
    console.log('listo borrar '+req.query.id_hbt)
    try{
        await habitacion.destroy({
            where: {id_hbt:req.query.id_hbt}});
        res.redirect("/listaHabitaciones");
    } catch(error){
        console.log(error);
    }
};
export {guardarHabitaciones, listaHabitaciones, cambiarHabitaciones, eliminarHabitaciones};
