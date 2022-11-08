const express = require("express");
const app = express();
const Contenedor = require("./main")

//-------------------------------------------------------------------------------------------------------//
let ProductList = new Contenedor;
const PORT = 8080;
//-------------------------------------------------------------------------------------------------------//

ProductList.getAll().then(ress=>{
  app.get("/productos",(req,res)=>{
    res.send(ress);
})
})

//-------------------------------------------------------------------------------------------------------//
function numeroAleatorio(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let num = numeroAleatorio(0, 3);
//-------------------------------------------------------------------------------------------------------//


ProductList.getById(num).then(ress=>{
  app.get("/productoRandom",(req,res)=>{
    res.send(ress);
})
})

//-------------------------------------------------------------------------------------------------------//


const server = app.listen(PORT, ()=>{
    console.log("servidor escuchando en el "+PORT)
})