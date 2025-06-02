import { Viaje} from '../models/Viaje.js';
import { Testimonial } from '../models/Testimonial.js';

const paginaInicio = async (req, res) => {

    const promises = [];

    promises.push(Viaje.findAll({
        limit: 3
    }));

    promises.push(Testimonial.findAll({
        limit: 3
    }));

    try {

        const resultado = await Promise.all(promises);

        console.log(resultado[0]);

        res.render('inicio', {
            viajes: resultado[0],
            testimoniales: resultado [1],
            clase: 'home',
            page: 'Inicio',
        });
    }catch (error) {
        console.log(error); //muestra errores si algo falla
    }
}
const paginaNosotros= (req,res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Proximos viajes',
        viajes,
    });
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render ('testimoniales', {
            testimoniales,
            page: 'Testimoniales'
        });
    }catch (error) {
        console.log(error);
    }
}

const paginaDetalleViaje = async (req, res) => {
    const { slug  }= req.params; //extrae el parámetro 'slug' de la URL

    try {
        const viaje = await Viaje.findOne({ where: { slug }});

        res.render('viaje', {
            pagina: 'informacion viaje',
            viaje
        });
    }catch (error) {
        console.log(error);
    }
}

const guardarTestimonial = async (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    try {
        await Testimonial.create({
            nombre,
            correo,
            mensaje
        });
        res.redirect('/testimoniales');
    } catch (error) {
        console.log(error);
        res.redirect('/testimoniales');
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
}
