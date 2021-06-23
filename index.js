var express = require('express');
var app = express();
const {mongoose} = require('./database')
const cors = require('cors');
//middlewares
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true }));
app.use(cors({origin: 'http://localhost:4200'}));


//Cargamos el modulo de direccionamiento de rutas para puntos
app.use('/api/alumno', require('./routes/alumno.route'));
app.use('/api/plan', require('./routes/plan.route'));
app.use('/api/rutina', require('./routes/rutina.route'));
app.use('/api/ejercicio', require('./routes/ejercicio.route'));
app.use('/api/usuario', require('./routes/usuario.route'));
app.use('/api/entrenador', require('./routes/entrenador.route'));
app.use('/api/asistencia', require('./routes/asistencia.route'));
app.use('/api/cuota', require('./routes/cuota.route'));
app.use('/api/registroDieta', require('./routes/registroDieta.route'));
app.use('/api/dieta', require('./routes/dieta.route'));
app.use('/api/mesDieta', require('./routes/mesDieta.route'));


//app.use('/api/sector, require('./routes/sector.route'));
//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
 console.log(`Server started on port`, app.get('port'));
});
