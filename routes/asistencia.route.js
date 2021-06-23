//defino controlador para el manejo de CRUD
const asistenciaCtrl = require('./../controllers/asistencia.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/:id', asistenciaCtrl.getAsistencia);
router.get('/get/:id',asistenciaCtrl.getAsistenciaByAlumno); //busqueda de asistencia por id de alumno
router.get('/', asistenciaCtrl.getAsistencias);
router.post('/', asistenciaCtrl.addAsistencia);
router.delete('/:id', asistenciaCtrl.deleteAsistencia);
router.put('/:id', asistenciaCtrl.editAsistencia);


//exportamos el modulo de rutas
module.exports = router;