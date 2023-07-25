const Profesor = require(`../models/academiaProfesor`)
const Curso = require(`../models/academiaCurso`)
const Instalacion = require(`../models/academiaInstalacion`)
const getIndex = (req, res) => {
    res.render('index', {
        titulo: "Bienvenido a nuestra academia de corte y confección",
        parrafo: "Conoce el patrimonio industrial textil de Ontinyent y la comarca del Valle de Albaida de la mano de la la academia del Textil de la Comunidad Valenciana. El taller, situado en una antigua fábrica textil, a orillas del río Clariano, ofrece un recorrido sobre la historia, la elaboración y la producción de tejidos de forma artesanal, exponiendo prendas que datan del  siglo XVIII a nuestros días.",
        imagen: {
            src: "http://valldalbaida.com/files/500/museutextil-2.jpg",
            alt: "Fábrica textil en Valencia"
        }

    })
}

const getCursos = async (req, res) => {

    try {
        const cursos = await Curso.find()


        res.render("cursos", {
            titulo: "estos son nuestros cursos",
            cursos
        })


    } catch (error) {

    }

}



const getProfesores = async (req, res) => {

    try {
        const profesores = await Profesor.find()


        res.render("profesores", {
            titulo: "estos son nuestros profesores",
            profesores
        })


    } catch (error) {

    }

}
const getInstalaciones = async (req, res) => {

    try {
        const instalaciones = await Instalacion.find()


        res.render("instalaciones", {
            titulo: "Echa un vistazo a nuestras instalaciones",
            descripcion: "Es importante que las personas reciban antes de acceder a Jovent, la información necesaria sobre nuestros programas (Orientación, Formación y Trabajo). Por este motivo, nos parece interesante que se pueda realizar una visita en la que se conozcan de primera mano nuestros servicios y nuestras instalaciones. Esta visita le puede ofrecer a la persona la posibilidad de ver el ritmo de las formaciones (materiales, maquinaria, alumnado en formación, …) y, aclarar todas las dudas que tenga en relación a nuestros servicios. Se pueden concertar visitas individuales y grupales (tanto si es un acompañamiento de otro recurso como si se quiere llevar a cabo como particular interesado)",
            instalaciones
        })


    } catch (error) {

    }

}

const getContacto = (req, res) => {
    res.render("contacto", {
        titulo: "CONTACTA CON NOSOTROS SI TE INTERESA ALGUNO DE NUESTROS CURSOS",
        parrafo: "Conoce el patrimonio industrial textil de Ontinyent y la comarca del Valle de Albaida de la mano de la la academia del Textil de la Comunidad Valenciana. El taller, situado en una antigua fábrica textil, a orillas del río Clariano, ofrece un recorrido sobre la historia, la elaboración y la producción de tejidos de forma artesanal, exponiendo prendas que datan del  siglo XVIII a nuestros días.",
        telefono: "Teléfono: 963 333 666",
        email: "Correo electrónico: blablabla@blbla.es",

        imagen: {
            pieFoto: "No dudes en contactar con nosotros para solucionar cualquier duda",
            src: "https://www.marketingdirecto.com/wp-content/uploads/2021/09/atencion-al-cliente.png",
            alt: "Dibujo de atención al cliente"
        }


    })
}




module.exports = {
    getIndex,
    getContacto,
    getCursos,
    getInstalaciones,
    getProfesores
}