const mongoose = require("mongoose");
const Dieta = require("./dieta");
const {Schema} = mongoose;
const MesDietaSchema = new Schema({

    mes: {type: Number, required: true},
    planSemanal: [{type: Dieta.schema, ref: Dieta, required:true}],
    objetivo: {type: String, required: true}

});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.MesDietaSchema || mongoose.model('MesDieta', MesDietaSchema);