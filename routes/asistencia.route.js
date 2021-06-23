//defino controlador para el manejo de CRUD
const asistenciaCtrl = require('./../controllers/asistencia.controller');
const authCtrl = require('../controllers/auth.controller')
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/:id',  authCtrl.verifyToken, asistenciaCtrl.getAsistencia);
router.get('/get/:id', authCtrl.verifyToken, asistenciaCtrl.getAsistenciaByAlumno); //busqueda de asistencia por id de alumno
router.get('/', authCtrl.verifyToken, asistenciaCtrl.getAsistencias);
router.post('/', authCtrl.verifyToken, asistenciaCtrl.addAsistencia);
router.delete('/:id', authCtrl.verifyToken, asistenciaCtrl.deleteAsistencia);
router.put('/:id', authCtrl.verifyToken, asistenciaCtrl.editAsistencia);


//exportamos el modulo de rutas
module.exports = router;