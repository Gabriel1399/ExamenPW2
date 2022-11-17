import { hotel } from "../models/Hoteles.js";
import { gerente } from "../models/Gerentes.js";
import { habitacion } from "../models/Habitaciones.js";
const guardarHoteles = async(req,res)=>{
    const{id_htl,nombre,direccion,telefono,correo,id_grt} = req.body;
    const gerentes = await gerente.findAll();
    const errores = [];
    if(nombre.trim()===""){
        errores.push({mensaje: "El nombre no debe ser vacio"});
    }
    if(direccion.trim()===""){
        errores.push({mensaje: "El direccion no debe ser vacio"});
    }
    if(telefono.trim()===""){
        errores.push({mensaje: "El telefono no debe ser vacio"});
    }
    if(correo.trim()===""){
        errores.push({mensaje: "El correo no debe ser vacio"});
    }
    if (errores.length>0){
        res.render("hoteles",{
            pagina:"Agrega Hotel",
            gerentes,
            errores,
            nombre,
            direccion,
            telefono,
            correo,
            id_grt,
        });
    } else{
        console.log(id_htl);
        if(id_htl>0){
            //Actualizar
            console.log("Actualiza");
            try {
                await hotel.update({
                    nombre,
                    direccion,
                    telefono,
                    correo,
                    id_grt,
                },{where:{id_htl:id_htl}});
                res.redirect("/hoteles");
            } catch(error){
                console.log(error);
            }
        } else {
            //Almacenar en la base de datos
            try{
                await hotel.create({
                    nombre,
                    direccion,
                    telefono,
                    correo,
                    id_grt,
                },);
                res.redirect('/hoteles');
            } catch (error){
                console.log(error);
            }
        }
    }
};

const listaHoteles = async(req,res)=>{
    const habitaciones = await habitacion.findAll();
    const hoteles = await hotel.findAll({
        attributes:["id_htl","nombre","direccion","telefono","correo","id_grt"],        
    });
    res.render("listahoteles", {
        pagina: "Lista Hoteles",
        hoteles,
        habitaciones
    });
};

const cambiarHoteles = async(req,res)=>{
    const gerentes = await gerente.findAll();
    console.log('Listo'+req.query.id_htl)
    try{
        const h = await hotel.findByPk(req.query.id_htl)
        console.log(h);
        const errores = [];
        res.render("hoteles",{
            pagina: "Modificar Hotel",
            errores,
            gerentes,
            id_htl:h.id_htl,
            nombre:h.nombre,
            direccion:h.direccion,
            telefono:h.telefono,
            correo:h.correo,
            id_grt:h.id_grt
            
        });
    } catch (error){
        console.log(error);
    }
};

const eliminarHoteles = async(req,res)=>{
    console.log('Listo borrar '+req.query.id_htl)
    try{
        await habitacion.update({
            id_htl:null,
        },{where:{id_htl:req.query.id_htl}});
        await hotel.destroy({
            where: {id_htl:req.query.id_htl}});
        res.redirect("/listahoteles");
        //console.log(h);
    } catch (error){
        console.log(error);
    }
}
export {guardarHoteles, listaHoteles, cambiarHoteles, eliminarHoteles};