
import admin from "firebase-admin";
import fs from "fs"

import {initializeApp}from  "firebase/app"
const rutaCredenciales = "./Contenedores/FireBase/Config/backend-af277-firebase-adminsdk-iphzx-3176bceb36.json"
var serviceAccount = JSON.parse(await fs.promises.readFile(rutaCredenciales));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const asObject = doc => ({ id: doc.id, ...doc.data()})

//Conexion a Firestore
const db = admin.firestore()
const dbProductos = db.collection("Productos")
const dbCarritos = db.collection("Carritos")

export { 
  db,
  dbProductos, 
  dbCarritos
}