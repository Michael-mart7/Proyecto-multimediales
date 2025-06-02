import { Testimonial } from "../models/Testimonial.js";


const guardarTestimonial = async (req, res) => {

    const {nombre, correo, mensaje } = req.body;

    const errores = [];

    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega tu nombre'});
    }
    if (!correo) {
        errores.push({'mensaje': 'Tu correo es obligatorio'});
    }
    if (!mensaje) {
        errores.push({'mensaje': 'Un testimonial no puede ir vacío'});
    }

    if (errores.length > 0) {
        const testimoniales = await Testimonial.findAll();


        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales,
            pagina: 'Testimoniales'
        });
    }else {

        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        }catch (error) {
            console.log(error);
        }
    }
};

export {
    guardarTestimonial
}