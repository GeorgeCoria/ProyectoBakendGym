const mongoose = require("mongoose");
const {Schema} = mongoose;
const ejercicio = require('./ejercicio');
const alumno = require('./alumno');


const RutinaSchema = new Schema({

    alumno: {type: Schema.Types.ObjectId,ref: alumno} ,  // vinculado al alumno por id
    ejercicio: [{type: Schema.Types.ObjectId,ref: ejercicio}],   // vinculado al ejercicio por id
    peso: [Number],
    serie: [Number],
    repeticion:[Number],
    mes: {type: Number, required: true},
    nombreRutina: {type: String, required: true},
    dia:{type:String,required:true}


});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.RutinaSchema || mongoose.model('Rutina', RutinaSchema);