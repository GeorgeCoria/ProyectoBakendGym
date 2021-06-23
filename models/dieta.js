const mongoose = require("mongoose");
const {Schema} = mongoose;
const DietaSchema = new Schema({

    dia: {type: String, required:true},
    desayuno: {type: String, required:true},
    almuerzo: {type: String, required:true},
    merienda: {type: String, required:true},
    cena: {type: String, required:true}

});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.DietaSchema || mongoose.model('Dieta', DietaSchema);