import Sequelize from 'sequelize';
import db from '../config/db.js';

//Definimos nuestro primer modelo
//Viaje: nombre del modelo
//Viajes: nombre de la tabla
export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    garantia: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
});
export default Viaje.js;