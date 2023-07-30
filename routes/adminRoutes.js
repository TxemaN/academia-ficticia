
const express=require("express");
const router=express.Router();
const {getCursos, vistaCrearCurso, cursoNuevo, vistaEditarCurso, cursoEditado}=require("../controllers/adminController")
//MOSTRAR TABLA CURSOS

router.get("/cursos", getCursos)

//FORMULARIO PARA CREAR
router.get("/cursos/crear", vistaCrearCurso)

//ENVIAR CURSO A LA API
router.post("/curso/nuevo", cursoNuevo)

//FORMULARIO PARA EDITAR

router.get("/cursos/editar", vistaEditarCurso)
//ENVIAR CURSO EDITADO A LA API
router.put("/curso/editado", cursoEditado)

//ENVIAR CURSO EDITADO A LA API


//ELIMINAR SERVICIO DE LA API


module.exports=router