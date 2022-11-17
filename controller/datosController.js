import { MisDatos } from "../models/MisDatos.js";
import db from "../config/db.js";
  /*
  const hoteles = await Hotel.findAll({//encuentra hotel
    include: {
      model: Gerente,
    },
    where: {//con id 1
      id_grt: "1",
    },
  });
  
  const info = await db.query(//info conjunta de hotel y gerente
    "select a.nombre as dato1,a.direccion as dato2,b.nombre as dato3,b.ap_paterno as dato4"+
    " from hoteles a inner join gerentes b on a.id_grt=b.id_grt"
  ,{
    model:MisDatos,
    mapToModel:true
  });

  const habitaciones = await Habitacion.findAll({//encuentra todas las habitaciones
    include: {
      model: Hotel,
      required: true,
    },
    where: {// con id de hotel 1
      id_htl: "1",
    },
  });
  */