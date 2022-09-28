import  Express  from "express";


//Importacion de contenedores provenientes del controlador; 
import { DaoProductos,  DaoCarritos} from "../Daos/Controlador.js";


const router = Express.Router(); 


router.get("/", async (req, res) => { 
    const obtenerCarritos = await DaoCarritos.obtenerCarritos()
    res.status(201).json({Lista_Carritos: obtenerCarritos})
})

router.get("/:codigo", async (req,res) => { 
  const codigoCarrito = req.params.codigo; 
  const carritoEncontrado = await DaoCarritos.obtenerCarritoPorId(codigoCarrito)
  res.status(201).json({Carrito: carritoEncontrado})
})

router.post("/", async (req,res) => { 
    const datosNuevoCarrito = req.body; 
    await DaoCarritos.crearCarrito(datosNuevoCarrito);
    res.status(201).json({Mensaje: "Carrito creado "}) 
})

router.post("/:codigo/:producto", async (req,res) => { 
    const codigoCarrito = req.params.codigo; 
    const codigoProducto = req.params.producto;
    const obtenerProducto = await DaoProductos.ObtenerPorId(codigoProducto); 

    await DaoCarritos.guardarProductosCarrito(codigoCarrito, obtenerProducto)
    res.status(201).json({Mensaje:"Ok"})

})

router.delete("/:id", async (req, res) => { 
    const idCarritoEliminar = req.params.id; 
    await DaoCarritos.eliminarCarrito(idCarritoEliminar); 
    res.status(201).json({Mensaje:"Carrito eliminado"})
})

router.delete("/:idCarrito/:productoEliminar",async (req,res) => { 
    const idCarrito = req.params.idCarrito; 
    const idProducto = req.params.productoEliminar; 
    const productoEliminar = await DaoProductos.ObtenerPorId(idProducto)

    await DaoCarritos.eliminarProductosCarritos(idCarrito, productoEliminar)

    res.status(201).json({Mensaje:"Producto Eliminado"})
})

export { 
    router
}