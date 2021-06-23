//defino controlador para el manejo de CRUD
const ejercicioCtrl = require('./../controllers/ejercicio.controller');
const authCtrl = require('../controllers/auth.controller')
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/:id', authCtrl.verifyToken, ejercicioCtrl.getEjercicio);
router.get('/', ejercicioCtrl.getEjercicios);
router.post('/', authCtrl.verifyToken, ejercicioCtrl.addEjercicio);
router.delete('/:id', authCtrl.verifyToken, ejercicioCtrl.deleteEjercicio);
router.put('/:id', authCtrl.verifyToken, ejercicioCtrl.editEjercicio);

//exportamos el modulo de rutas
module.exports = router;