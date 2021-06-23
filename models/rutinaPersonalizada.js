const mongoose = require("mongoose");
const {Schema} = mongoose;
const rutina = require('./rutina');

const RutinaPersonalizadaSchema = new Schema({

//rutper_rutina: {type: Rutina.schema, required: true},  //declarar objeto nuevo tipo rutina dentro de la tabla
    rutina: {type: Schema.Types.ObjectId, ref:rutina, required:true} ,//objeto de tipo rutina por id, debe estar creado previamente
    repeticion: {type: [Number], required: true }, //declaracion de arrays de numeros
    serie: {type: [Number], required: true },
    peso: {type: [Number], required: true },
    dia: {type: String,required: true    }

});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.RutinaPersonalizadaSchema || mongoose.model('RutinaPersonalizada', RutinaPersonalizadaSchema);

