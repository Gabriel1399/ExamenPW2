import {hotel} from "../models/Hotel.js";
const guardarHotel = async(req,res)=>{
    const{id_htl, nombre, direccion, telefono,correo} = req.body;
    const errores = [];
    if(nombre.trim()===""){
        errores.push({mensaje: "El nombre no debe ser vacio"});
    }
    if(direccion.trim()===""){
        errores.push({mensaje: "La direccion no debe ser vacio"});
    }
    if(telefono.trim()===""){
        errores.push({mensaje: "El telefono no debe ser vacio"});
    }
    if(correo.trim()===""){
        errores.push({mensaje: "El correo no debe ser vacio"});
    }
    if (errores.length>0){
        res.render("hotel",{
            pagina:"Hotel",
            errores,
            nombre,
            direccion,
            telefono,
            correo,
        });
    } else {
        console.log(id_htl);
        if(id_htl > 0){
            //Actualizar
            console.log("actualiza");
            try{
                await hotel.update({
                    nombre,
                    direccion,
                    telefono,
                    correo
                },{where: {id_htl:id_htl}});
                res.redirect('/hotel');
            } catch (error){
                console.log(error);
            }

        } else{
            //Almacenar en la base de datos
            try{
                await hotel.create({
                    nombre,
                    direccion,
                    telefono,
                    correo
                });
                res.redirect('/hotel');
            } catch (error){
                console.log(error);
            }
        }
        
    }
};

const listaHoteles = async (req, res) => {
    const hotel = await hotel.findAll({
        attributes: ["id_htl", "nombre", "direccion", "telefono", "correo"],
    });

    res.render("hotel", {
        pagina: "Hotel",
        hotel
    });
};

const cambiarHoteles = async (req, res) => {

    console.log('Listo '+req.query.id_htl)
    try{
        const hot=await hotel.findByPk(req.query.id_htl)
        console.log(hot);
        //const {correo, imagen, opinion} =req.body;
        const errores = [];
        res.render("hotel", {
            pagina: "Hotel",
            errores, 
            id_htl:hot.id_htl,
            nombre:hot.nombre,
            direccion:hot.direccion,
            telefono:hot.telefono,
            correo:hot.correo
        });
    } catch(error){
    console.log(error);
    }
};

const eliminarHoteles =async(req, res) => {
    console.log('listo borrar '+req.query.id_htl)
    try{
        await hotel.destroy({
            where: {id_htl:req.query.id_htl}});
        res.redirect("/hotel");
    } catch(error){
        console.log(error);
    }
};
export {guardarHotel, listaHoteles, cambiarHoteles, eliminarHoteles};
