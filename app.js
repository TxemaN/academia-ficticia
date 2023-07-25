const express=require("express");
const app=express();
const {dbConnect}=require(`./utils/connection`);
require(`dotenv`).config();
const port = process.env.PORT || 3000;

//carpeta pública//
app.use(express.static(__dirname+"/public"))

//establecer plantillas//
app.set("views", __dirname + "/views");
app.set("view engine", "ejs")

//capturar desde routes//
app.use("/",require("./routes/frontRoutes"));

//CONEXIÓN MONGO//
dbConnect()
//aquí iba cada una de las paginas ya cortadas//


  


  app.listen(port, ()=>{
    console.log('servidor por el puerto' , port)
  })