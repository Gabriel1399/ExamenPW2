import { habitacion } from "../models/Habitaciones.js";
import { hotel } from "../models/Hoteles.js";
const guardarHabitaciones = async(req,res)=>{
    const hoteles = await hotel.findAll();
    const{id_hbt,piso,nombre,refrigerador,id_htl} = req.body;
    const errores = [];
    if(piso.trim()===""){
        errores.push({mensaje: "El piso no debe ser vacio"});
    }
    if(nombre.trim()===""){
        errores.push({mensaje: "El nombre no debe ser vacio"});
    }
    if(refrigerador===null){
        errores.push({mensaje: "El refrigerador no debe ser vacio"});
    }
    if (errores.length>0){
        res.render("habitaciones",{
            pagina:"Agrega Habitacion",
            errores,
            hoteles,
            piso,
            nombre,
            refrigerador,
            id_htl,
        });
    } else{
        console.log(id_hbt);
        if(id_hbt>0){
            //Actualizar
            console.log("Actualiza");
            try {
                await habitacion.update({
                    piso,
                    nombre,
                    refrigerador,
                    id_htl,
                },{where:{id_hbt:id_hbt}});
                res.redirect("/habitaciones");
            } catch(error){
                console.log(error);
            }
        } else {
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

const listaHabitaciones = async(req,res)=>{
    const habitaciones = await habitacion.findAll({
        attributes:["id_hbt","piso","nombre","refrigerador","id_htl"],        
    });
    
    res.render("listahabitaciones", {
        pagina: "Lista Habitaciones",
        habitaciones
    });
};

const cambiarHabitaciones = async(req,res)=>{
    const hoteles = await hotel.findAll();
    console.log('Listo '+req.query.id_hbt)
    try{
        const h = await habitacion.findByPk(req.query.id_hbt)
        console.log(h);
        const errores = [];
        res.render("habitaciones",{
            pagina: "Modificar Habitacion",
            errores,
            hoteles,
            id_hbt:h.id_hbt,
            piso:h.piso,
            nombre:h.nombre,
            refrigerador:h.refrigerador,
            id_htl:h.id_htl
        });
    } catch (error){
        console.log(error);
    }
};

const eliminarHabitaciones = async(req,res)=>{
    console.log('Listo borrar '+req.query.id_hbt)
    try{
        await hotel.update({
            id_hbt:null,
        },{where:{id_hbt:req.query.id_hbt}});
        await habitacion.destroy({
            where: {id_hbt:req.query.id_hbt}});
        res.redirect("/listahabitaciones");
        //console.log(h);
    } catch (error){
        console.log(error);
    }
}
export {guardarHabitaciones, listaHabitaciones, cambiarHabitaciones, eliminarHabitaciones};