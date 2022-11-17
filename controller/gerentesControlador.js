import { hotel } from "../models/Hoteles.js";
import { gerente } from "../models/Gerentes.js";
const guardarGerentes = async(req,res)=>{
    const{id_grt,nombre,ap_paterno,ap_materno,telefono} = req.body;
    const errores = [];
    if(nombre.trim()===""){
        errores.push({mensaje: "El nombre no debe ser vacio"});
    }
    if(ap_paterno.trim()===""){
        errores.push({mensaje: "El ap_paterno no debe ser vacio"});
    }
    if(ap_materno.trim()===""){
        errores.push({mensaje: "El ap_materno no debe ser vacio"});
    }
    if(telefono.trim()===""){
        errores.push({mensaje: "El telefono no debe ser vacio"});
    }
    if (errores.length>0){
        res.render("gerentes",{
            pagina:"Agrega Gerente",
            errores,
            nombre,
            ap_paterno,
            ap_materno,
            telefono,
        });
    } else{
        console.log(id_grt);
        if(id_grt>0){
            //Actualizar
            console.log("Actualiza");
            try {
                await gerente.update({
                    nombre,
                    ap_paterno,
                    ap_materno,
                    telefono,
                },{where:{id_grt:id_grt}});
                res.redirect("/gerentes");
            } catch(error){
                console.log(error);
            }
        } else {
            //Almacenar en la base de datos
            try{
                await gerente.create({
                    nombre,
                    ap_paterno,
                    ap_materno,
                    telefono
                });
                res.redirect('/gerentes');
            } catch (error){
                console.log(error);
            }
        }
    }
};

const listaGerentes = async(req,res)=>{
    const gerentes = await gerente.findAll({
        attributes:["id_grt","nombre","ap_paterno","ap_materno","telefono"],        
    });
    
    res.render("listagerentes", {
        pagina: "Lista Gerentes",
        gerentes
    });
};

const cambiarGerentes = async(req,res)=>{
    console.log('Listo'+req.query.id_grt)
    try{
        const g = await gerente.findByPk(req.query.id_grt)
        console.log(g);
        const errores = [];
        res.render("gerentes",{
            pagina: "Modificar Gerente",
            errores,
            id_grt:g.id_grt,
            nombre:g.nombre,
            ap_paterno:g.ap_paterno,
            ap_materno:g.ap_materno,
            telefono:g.telefono
        });
    } catch (error){
        console.log(error);
    }
};

const eliminarGerentes = async(req,res)=>{
    console.log('Listo borrar '+req.query.id_grt)
    try{
        await hotel.update({
            id_grt:null,
        },{where:{id_grt:req.query.id_grt}});
        await gerente.destroy({
            where: {id_grt:req.query.id_grt}});
        res.redirect("/listagerentes");
        //console.log(g);
    } catch (error){
        console.log(error);
    }
}
export {guardarGerentes, listaGerentes, cambiarGerentes, eliminarGerentes};
