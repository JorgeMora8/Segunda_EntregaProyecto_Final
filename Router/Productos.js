import  Express  from "express";

//Importacion de Dao de productos 
import { DaoProductos } from "../Daos/Controlador.js";


const router = Express.Router(); 

router.get("/", async (req, res) => { 
    const productos = await DaoProductos.ObtenerProductos()
    res.json({Productos: productos})
})

router.get("/:id", async (req, res) => { 
   const id = req.params.id; 
   const productoAencontrar = await DaoProductos.ObtenerPorId(id)
   res.json({Producto: productoAencontrar})
})

router.post("/", async (req, res) => { 
    const productoNuevo = req.body; 
     await DaoProductos.guardar(productoNuevo)
    res.json({Mensaje:"Producto agregado"})
})

router.put("/:id", async (req, res) => { 
   const idProductoActualizar = req.params.id; 
   const nuevosDatosProductos = req.body; 
   await DaoProductos.actualizarPorId(idProductoActualizar, nuevosDatosProductos.nombre); 
   res.status(201).json({Estado: "Producto actualizado"})
})

router.delete("/:id", async (req, res) => { 
   const idProductoEliminar = req.params.id; 
   await DaoProductos.eliminarPorId(idProductoEliminar); 
   res.status(201).json({Mensaje:"Producto eliminado"})
})

export { 
    router
}