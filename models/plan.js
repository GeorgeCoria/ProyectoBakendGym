const mongoose = require("mongoose");
const {Schema} = mongoose;

const PlanSchema = new Schema({

    nombre: {type: String, required: true},
    descripcion: {type: String, required:true},
    precio: {type: Number, required:true},
    dias: {type: Number, required:true},


});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.PlanSchema || mongoose.model('Plan', PlanSchema);