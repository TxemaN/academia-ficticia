const { Schema, model } = require("mongoose");

const CursoSchema = new Schema({

    nombre: {
        type: String,
        require: true,
        unique: false,
        
    },
    descripcion: {
        type: String,
        require: true,
        
    },
    fecha: {
        type: String,
        require: true,
        
    },
    precio: {
        type: String,
        require: true,
        
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
module.exports = model(`Curso`, CursoSchema)