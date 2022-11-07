const express = require("express");
const app = express();
const Contenedor = require("./main")

let ProductList = new Contenedor;
// console.log(ProductList.getAll());
let prod;
async function main() {
    let data = await ProductList.getAll();
    return data;
  };

  const otrafuncion = async () => {
    console.log(await main())
}
otrafuncion();
  
  
// app.get("/",(req,res)=>{
//     res.send("Hola mundo")
// })


// const server = app.listen(8080, ()=>{
//     console.log("servidor escuchando en el 8080")
// })