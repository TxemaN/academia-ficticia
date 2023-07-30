


//MOSTRAR TABLA CURSOS
const getCursos =  (req, res) => {
    
    res.render("admin/cursos")


}


//FORMULARIO PARA CREAR
const vistaCrearCurso = (req, res) => {
    res.render("admin/cursoNuevo")



}

//ENVIAR CURSO A LA API
const cursoNuevo = async (req, res) => {
    const {nombre, descripcion} = req.body
    
    console.log(nombre, descripcion)

    const body = { nombre, descripcion }
    await fetch("http://localhost:3000/api/v1/cursos", {
        method: "post",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }

    })
    res.redirect("/cursos")
}

//FORMULARIO PARA EDITAR

const vistaEditarCurso = (req, res) => {
    res.render("admin/cursoEditar")

}




//ENVIAR CURSO EDITADO A LA API

const cursoEditado = async (req, res) => {
    const {nombre, descripcion, id} = req.body
    
    console.log(nombre, descripcion, id)

    const body = { nombre, descripcion, id }
    await fetch("http://localhost:3000/api/v1/cursos", {
        method: "put",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }

    })
    res.redirect("/cursos")
}
//ELIMINAR SERVICIO DE LA API



module.exports = {
    getCursos,
    vistaCrearCurso,
    cursoNuevo,
    vistaEditarCurso,
    cursoEditado

}