const mongoose = require('mongoose');
const plan    = require('./plan');
const usuario = require('./usuario');

const {Schema} = mongoose;

const AlumnoSchema = new Schema({

    apellido: {type: String, required: true},
    nombre: {type: String, required: true},
    dni: {type: String, required: true},
    fecha_nacimiento: {type: Date, required: true},
    celular: {type: String, required: true},
    domicilio: {type: String, required: true},
    email: {type: String, required: true},
    fecha_inicio: {type: Date, required: true},
    plan: {type: Schema.Types.ObjectId, ref:plan, required:true},  //objeto de tipo plan , debe estar creado previamente
    usuario: {type: Schema.Types.ObjectId,ref: usuario},   //usuario vinculado al alumno por id
    mes: {type: Number, required: true}

});

module.exports = mongoose.models.AlumnoSchema || mongoose.model('Alumno', AlumnoSchema);



