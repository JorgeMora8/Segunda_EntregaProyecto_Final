

//Importacion de la conexion/configuracion de Firestore; 
import { dbCarritos } from "../../Contenedores/FireBase/Config/Config.js";

//Importacion del contenedor del carrito de FireStore; 
import contenedor from "../../Contenedores/FireBase/ContenedorCarritos.js";

const DaoCarritos = new contenedor(dbCarritos); 

export { 
    DaoCarritos
}