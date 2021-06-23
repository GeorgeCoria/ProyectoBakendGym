const mongoose = require("mongoose");
const {Schema} = mongoose;

const UsuarioSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required:true},
    state:{type: Boolean, required:true},
    rol: {type: String, required: true} //    -- ALUMNO / ENTRENADOR --
});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.model('Usuario', UsuarioSchema);
