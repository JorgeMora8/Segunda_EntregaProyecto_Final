import mongoose from "mongoose";
const uri = "mongodb://localhost:27017"

mongoose.connect(uri)

//=>Contenedor de productos usango MongoDB
export default class Contenedor{ 
    constructor(schema){ 
        this.schema = schema
    }


   async guardar(objetoProductoNuevo){
        const nombre = objetoProductoNuevo.nombre; 
        const precio = objetoProductoNuevo.precio; 
        const tipo = objetoProductoNuevo.tipo; 
        const garantia = objetoProductoNuevo.garantia; 
        const codigoGenerado = Math.floor(Math.random()*99999999999)
        const datosGuardar = this.schema.create({nombre:nombre, precio:precio, tipo:tipo, garantia: garantia, codigo:codigoGenerado})
        return datosGuardar
    }

    ObtenerProductos(){ 
        const datos = this.schema.find().select({_id:0, __v:0}).lean()
        return datos
    }

    ObtenerPorId(idProducto){ 
        const dato =  this.schema.findOne({codigo:idProducto}).select({_id:0, __v:0})
        return dato
    }

    eliminarPorId(nombreDato){ 
        const datosEliminar = this.schema.deleteOne({codigo:nombreDato})
        return datosEliminar
    }

    actualizarPorId(id, nombre){ 
        const datoActualizar = this.schema.updateOne({id:id}, {$set:{nombre:nombre}})
        return datoActualizar
    }

}