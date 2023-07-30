const express=require("express");
const app=express();
const {dbConnect}=require(`./utils/connection`);
require(`dotenv`).config();
const port = process.env.PORT ;

//carpeta pública//
app.use(express.static(__dirname+"/public"))

//establecer plantillas//
app.set("views", __dirname + "/views");
app.set("view engine", "ejs")



//CONEXIÓN MONGO//
dbConnect()

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

//capturar desde routes//
app.use("/",require("./routes/frontRoutes"));
app.use("/admin",require("./routes/adminRoutes"));
  


  app.listen(port, ()=>{
    console.log('servidor por el puerto' , port)
  })