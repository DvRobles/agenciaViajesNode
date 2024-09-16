import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => { //? req = lo que enviamos | res = lo que express nos responde

    //* Consultar 3 viajes del modelo viaje

    const promiseDB = [];

    promiseDB.push( Viaje.findAll({ limit: 3 }) );
    promiseDB.push( Testimonial.findAll({ limit: 3 }) );
    //* con esto de promise all se ejecutan al mismo tiempo por la posicion de array y tardará lo mismo en ejecutarse

    try {
        const resultado = await Promise.all( promiseDB );


        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        }); //? send imprime
    } catch (error) {
        console.log(error)
    }



}

const paginaNosotros = (req, res) => { //? req = lo que enviamos | res = lo que express nos responde
    res.render('nosotros', {
        pagina: 'Nosotros'
    });  //? render muestra un html digamos
}

const paginaViajes = async (req, res) => { //? req = lo que enviamos | res = lo que express nos responde

    //* Consultar DB
    const viajes =  await Viaje.findAll();

    console.log(viajes)

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes,
    });  //? render muestra un html digamos
}

const paginaTestimoniales = async (req, res) => { //? req = lo que enviamos | res = lo que express nos responde

    try {
        const testimoniales = await Testimonial.findAll();

        //? render muestra un html digamos
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        }); 
    } catch (error) {
        console.log(error);
    }

}


//* Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}