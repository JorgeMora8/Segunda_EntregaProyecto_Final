import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({ 
    nombre:{type:String, required:true},
    precio:{type:String, required:true},
    tipo:{type:String, required:true},
    garantia:{type:String, required:true},
    codigo:{type:String, required:true}
})

export default mongoose.model("productos", productoSchema)