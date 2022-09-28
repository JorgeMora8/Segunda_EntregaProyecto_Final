//=>En este documento se encuentran todos los contenedor de MongoDb y Firebase

//Contenedores de productos y carrito en MongoDB; 
// import { DaoProductos } from "./Productos/DaoProductosMongodb.js";
// import {DaoCarritos} from "./Carrito/DaoCarritoMongodb.js"


//Contenedor de productos y carrito en MongoDb
import {DaoProductos} from "./Productos/DaoProductosFirestore.js"
import {DaoCarritos} from "./Carrito/DaoCarritoFirestore.js"













//Exportacion de contenedores para el uso de base de datos. Unicamente se puede usar una de las dos opciones dispnibles (MongoDb o FireStore);
export { 
    DaoProductos, 
    DaoCarritos
}
