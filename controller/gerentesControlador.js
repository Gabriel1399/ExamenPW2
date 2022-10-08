import {gerente} from "../models/Gerentes.js";
const guardarGerentes = async(req,res)=>{
    const{id_grt, nombre, ap_paterno, ap_materno, telefono} = req.body;
    const errores = [];
    if(nombre.trim()===""){
        errores.push({mensaje: "El nombre no debe ser vacio"});
    }
    if(ap_paterno.trim()===""){
        errores.push({mensaje:"El Apellido Paterno no debe ser vacio"});
    }
    if(ap_materno.trim()===""){
        errores.push({mensaje:"El Apellido Materno no debe ser vacio"});
    }
    if(telefono.trim()===""){
        errores.push({mensaje: "El telefono no debe ser vacio"});
    }
    if (errores.length>0){
        res.render("gerentes",{
            pagina:"Gerentes",
            errores,
            nombre,
            ap_paterno,
            ap_materno,
            telefono,
        });
    } else {
        console.log(id_grt);
        if(id_grt > 0){
            //Actualizar
            console.log("actualiza");
            try{
                await gerente.update({
                    nombre,
                    ap_paterno,
                    ap_materno,
                    telefono
                },{where: {id_grt:id_grt}});
                res.redirect('/listagerentes');
            } catch (error){
                console.log(error);
            }

        } else{
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

const listaGerentes = async (req, res) => {
    const gerentes = await gerente.findAll({
        attributes: ["id_grt", "nombre", "ap_paterno", "ap_materno", "telefono"],
    });

    res.render("listaGerentes", {
        pagina: "Gerentes",
        gerentes
    });
};

const cambiarGerentes = async (req, res) => {

    console.log('Listo '+req.query.id_grt)
    try{
        const ger=await gerente.findByPk(req.query.id_grt)
        console.log(ger);
        //const {correo, imagen, opinion} =req.body;
        const errores = [];
        res.render("gerentes", {
            pagina: "Gerentes",
            errores, 
            id_grt:ger.id_grt,
            nombre:ger.nombre,
            ap_paterno:ger.ap_paterno,
            ap_materno:ger.ap_materno,
            telefono:ger.telefono
        });
    } catch(error){
    console.log(error);
    }
};

const eliminarGerentes =async(req, res) => {
    console.log('listo borrar '+req.query.id_grt)
    try{
        await gerente.destroy({
            where: {id_grt:req.query.id_grt}});
        res.redirect("/listaGerentes");
    } catch(error){
        console.log(error);
    }
};
export {guardarGerentes, listaGerentes, cambiarGerentes, eliminarGerentes};
