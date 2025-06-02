import  {DataTypes}  from 'sequelize';
import db from '../config/db.js';

export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: DataTypes.STRING, // Usa DataTypes, no Sequelize
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    mensaje: {
        type: DataTypes.TEXT, // TEXT para mensajes largos
        allowNull: false
    }
}, {
    timestamps: true // Opcional: createdAt y updatedAt
    }
);