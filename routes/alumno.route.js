//defino controlador para el manejo de CRUD
const alumnoCtrl = require('./../controllers/alumno.controller');
const authCtrl = require('../controllers/auth.controller')
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/' , authCtrl.verifyToken, alumnoCtrl.getAlumnos);
router.get('/:id', authCtrl.verifyToken,  alumnoCtrl.getAlumno);
router.post('/',  authCtrl.verifyToken, alumnoCtrl.addAlumno);
router.delete('/:id',  authCtrl.verifyToken, alumnoCtrl.deleteAlumno);
router.put('/:id',  authCtrl.verifyToken, alumnoCtrl.editAlumno);

//exportamos el modulo de rutas
module.exports = router;