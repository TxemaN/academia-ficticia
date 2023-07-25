const mongoose=require("mongoose");

const dbConnect=async()=>{

    try{
        await mongoose.connect(process.env.URI_DB)
    console.log("conectando a la base")
}catch(error){
    console.log("no está conectando a la base")}

}

module.exports={dbConnect}