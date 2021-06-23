const mongoose = require("mongoose");
const {Schema} = mongoose;
const EjercicioSchema = new Schema({

    nombre: {type: String, required: true},
    descripcion: {type:String, required:true},
    imagen: {type:String, required:true}

});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.EjercicioSchema || mongoose.model('Ejercicio', EjercicioSchema);