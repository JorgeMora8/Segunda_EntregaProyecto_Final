
//Importacion del contenedor de productos de FireStore; 
import contenedor from "../../Contenedores/FireBase/ContenedorProductos.js";

//Importacion de la configuracion de la base de datos; 
import { dbProductos } from "../../Contenedores/FireBase/Config/Config.js";

const DaoProductos = new contenedor(dbProductos); 

export{ 
    DaoProductos
}
