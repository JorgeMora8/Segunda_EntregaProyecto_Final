import  Express  from "express";

const app = Express(); 
const PORT = 8080; 

app.use(Express.json())
app.use(Express.urlencoded({extended:true}))

//=>Inportacion de routers; 
import {router} from "./Router/Productos.js"
import {router as routerCarrito} from "./Router/Carrito.js"


//=>Instalacion de routers; 
app.use("/api/productos/", router)
app.use("/api/carritos", routerCarrito)


const server = app.listen(PORT, () => {
  console.log("Usando el puerto: "+ PORT)
})

server.on("error", (err) => { 
  console.log(err)
})

app.get("/", async (req,res) => { 
res.send("Estas en la pagina principal")
})
