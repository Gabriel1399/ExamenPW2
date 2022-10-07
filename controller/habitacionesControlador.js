import {habitacion} from "../models/Habitacion.js";
const guardarHabitaciones = async(req,res)=>{
    const{id_hbt, piso, nombre, refrigerador} = req.body;
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
    if (errores.length>0){
        res.render("habitacion",{
            pagina:"Habitacion",
            errores,
            piso,
            nombre,
            refrigerador,
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
                    refrigerador
                },{where: {id_hbt:id_hbt}});
                res.redirect('/habitacion');
            } catch (error){
                console.log(error);
            }

        } else{
            //Almacenar en la base de datos
            try{
                await habitacion.create({
                    piso,
                    nombre,
                    refrigerador
                });
                res.redirect('/habitacion');
            } catch (error){
                console.log(error);
            }
        }
        
    }
};

const listaHabitaciones = async (req, res) => {
    const habitacion = await habitacion.findAll({
        attributes: ["id_hbt", "piso", "nombre", "refrigerador"],
    });

    res.render("habitacion", {
        pagina: "Habitacion",
        habitacion
    });
};

const cambiarHabitaciones = async (req, res) => {

    console.log('Listo '+req.query.id_hbt)
    try{
        const hab=await habitacion.findByPk(req.query.id_hbt)
        console.log(hab);
        //const {correo, imagen, opinion} =req.body;
        const errores = [];
        res.render("habitacion", {
            pagina: "Habitacion",
            errores, 
            id_hbt:hab.id_hbt,
            piso:hab.piso,
            nombre:hab.nombre,
            refrigerador:hab.refrigerador
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
        res.redirect("/habitacion");
    } catch(error){
        console.log(error);
    }
};
export {guardarHabitaciones, listaHabitaciones, cambiarHabitaciones, eliminarHabitaciones};
