const mongoose = require("mongoose");
const alumno = require("./alumno");
const {Schema} = mongoose;
const AsistenciaSchema = new Schema({
    
    fecha: {type: Date, required: true},
    alumno: {type: Schema.Types.ObjectId, ref: alumno, required: true}   //usuario vinculado al alumno por id
});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.AsistenciaSchema || mongoose.model('Asistencia', AsistenciaSchema);
