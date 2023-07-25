const{Schema, model}=require("mongoose");

const InstalacionSchema=new Schema({

   
    descripcionFoto: {
        type: String,
        require:true,
        
    },
    imagen: {
        src: {
            type: String,
            require: true,

        },
        alt: {
            type: String,
            require: true,

        }

    }
  
})
module.exports=model(`Instalacion`, InstalacionSchema)