const mongoose = require("mongoose");
const alumno = require("./alumno");

const {Schema} = mongoose;
const CuotaSchema = new Schema({

    monto: {type: Number, required: true},
    fecha_pago: {type: Date, required:true},
    modo_pago: {type: String, required:true},
    alumno: {type: Schema.Types.ObjectId,ref: alumno}   //usuario vinculado al alumno por id

});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.CuotaSchema || mongoose.model('Cuota', CuotaSchema);
