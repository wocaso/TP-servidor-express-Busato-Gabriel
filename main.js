const fs = require("fs");

class Contenedor{
    saveObject(object){
        fs.readFile("./productos.txt", "utf-8",(err, contenido)=>{
            if(err){
                let data = [];
                data.push({...object, id: 0})
                fs.writeFile("./productos.txt",JSON.stringify(data, null, 2) , err=>{
                    if(err){
                        console.log("Algo salio mal leyendo el archivo en saveObject")
                    }else{
                        console.log(data)
                    }
                })
            }
            else{
                 let data = JSON.parse(contenido);
                 let i = 0;
                 let idAnterior = 0;
                while(data[i] !== undefined){
                    idAnterior = (data[i].id + 1)
                    i++;
                }
                data.push({...object, id: idAnterior})
                fs.writeFile("./productos.txt",JSON.stringify(data, null, 2) , err=>{
                    if(err){
                        console.log("Algo salio mal leyendo el archivo en saveObject")
                    }else{
                        console.log(data)
                    }
                })
            }
        })

    }

//    getAll(){              
//         fs.readFile("./productos.txt", "utf-8",(err, contenido)=>{
//             if(err){
//                 console.log("Algo salio mal con el getAll")
//             }
//             else{
//                  let data = JSON.parse(contenido);
//                  console.log(data)

//             }
//         })

//     }

    async getAll(){
        try{
            const contenido = await fs.promises.readFile("./productos.txt", "utf-8")
            let data = JSON.parse(contenido);
            return data;
        }catch(err){
            console.log("Algo salio mal con el getAll", err)
        }
            
        
    }

    // getById(id){
    //     fs.readFile("./productos.txt", "utf-8",(err, contenido)=>{
    //         if(err){
    //             console.log("Algo salio mal con el getById")
    //         }
    //         else{
    //              let data = JSON.parse(contenido);
    //              let i = 0;
    //              let dataFound = null;
    //             while(data[i] !== undefined){
    //                 data[i].id === id && (dataFound = data[i]) ;
    //                 i++;    
    //             }
    //             console.log(dataFound);
    //         }
    //     })
    // }


    async getById(id){
        try{
            const contenido = await fs.promises.readFile("./productos.txt", "utf-8")
            let data = JSON.parse(contenido);
            let i = 0;
                 let dataFound = null;
                while(data[i] !== undefined){
                    data[i].id === id && (dataFound = data[i]) ;
                    i++;    
                }
                return dataFound;

        }catch{
            console.log("Algo salio mal con el getById")
        }
    }

    deleteById(id){
        fs.readFile("./productos.txt", "utf-8",(err, contenido)=>{
            if(err){
                console.log("Algo salio mal borrando archivos con deleteById")
            }
            else{
                 let data = JSON.parse(contenido);
                 let i = 0;
                while(data[i] !== undefined){
                    data[i].id === id && (data.splice(i,1)) ;
                    i++;    
                }
                fs.writeFile("./productos.txt",JSON.stringify(data, null, 2) , err=>{
                    if(err){
                        console.log("Algo salio mal borrando archivos con deleteById")
                    }else{
                        console.log(data)
                    }
                })

            }
        })
    }

    deleteAll(){
        let data = [];
        fs.writeFile("./productos.txt",JSON.stringify(data, null, 2) , err=>{
            if(err){
                console.log("Algo salio mal borrando archivos con deleteAll")
            }else{
                console.log(data)
            }
        })
    }
}

// const Producto = {tittle: "Licuadora", price:2000, thumbnail: "https://www.cetrogar.com.ar/media/catalog/product/l/i/licuadora_1_smartlife_0_cmyk.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"}

module.exports = Contenedor;