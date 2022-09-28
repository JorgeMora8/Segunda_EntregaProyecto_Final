
//=>Contenedor de Productos usando FireStore
export default class contenedor { 
    constructor(baseDatos){ 
        this.baseDatos = baseDatos
    }

   async ObtenerProductos(){ 
        const response = await this.baseDatos.get(); 
        const responseArray = [];
        response.forEach(doc => { 
        responseArray.push(doc.data())
  })
  return responseArray
    }

   async ObtenerPorId(id){ 
        const productoRef = this.baseDatos.doc(id)
        const response = await productoRef.get(); 
        const productoAenviar = response.data()

        return productoAenviar
    }

    async guardar(datos){ 
        const nuevoProducto = await this.baseDatos.add(datos)
        return nuevoProducto
      
    }

    async actualizarPorId(id, nuevosDatos){ 
      const nuevoProducto = await this.baseDatos.doc(id).update(nuevosDatos)
        return nuevoProducto
    }

    async eliminarPorId(id){ 
     const productoAeliminar = await this.baseDatos.doc(id).delete()
     return productoAeliminar
    }
}

