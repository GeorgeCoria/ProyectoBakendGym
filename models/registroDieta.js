const mongoose = require("mongoose");
const Alumno = require("./alumno");
const MesDieta = require("./mesDieta");
const {Schema} = mongoose;
const RegistroDietaSchema = new Schema({

    plan_dieta: {type: Schema.Types.ObjectId,ref: MesDieta, required: true},
    fecha: {type: Date, required: true},
    peso: {type: Number, required:true},
    foto: {type: String, required:true},
    alumno: {type: Schema.Types.ObjectId,ref: Alumno, required: true},
    objetivo: {type: String, required: true}

});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.RegistroDieta || mongoose.model('RegistroDieta', RegistroDietaSchema);