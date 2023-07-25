const express=require("express");
const router=express.Router();

//app. pasa a ser router.
const {getIndex, getContacto, getCursos, getInstalaciones, getProfesores}=require('../controllers/frontController')
router.get('/',getIndex)
router.get('/contacto', getContacto)
router.get('/cursos', getCursos)
router.get('/instalaciones', getInstalaciones)
router.get('/profesores', getProfesores)

module.exports=router
