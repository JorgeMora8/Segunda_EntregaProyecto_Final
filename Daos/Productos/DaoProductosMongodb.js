
//Importacion del contenedor de productos de MongoDb; 
import Contenedor from "../../Contenedores/MongoDB/ContenedorProductos.js";


//Importacion de la Schema/Model para el uso del contenedor de MongoDb; 
import ProductoSchema from "../../Contenedores/MongoDB/Config/Schema/ProductoSchema.js";

const DaoProductos = new Contenedor(ProductoSchema);

export { 
    DaoProductos
}

