

//Importacion del contenedor del carrito de Mongodb; 
import contenedor from "../../Contenedores/MongoDB/ContenedorCarritos.js";

//Importacion del Schema/Model del carrito de MongoDb; 
import CarritoSchema from "../../Contenedores/MongoDB/Config/Schema/CarritoSchema.js";

const DaoCarritos = new contenedor(CarritoSchema); 

export { 
    DaoCarritos
}
