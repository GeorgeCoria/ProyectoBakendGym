const mongoose = require('mongoose');
const usuario = require('./usuario');

const {Schema} = mongoose;

const EntrenadorSchema = new Schema({

    apellido: {type: String, required: true},
    nombre: {type: String, required: true},
    dni: {type: String, required: true},
    celular: {type: String, required: true},
    usuario: {type: Schema.Types.ObjectId,ref: usuario}   //usuario vinculado al alumno por id


});

module.exports = mongoose.models.EntrenadorSchema || mongoose.model('Entrenador', EntrenadorSchema);



