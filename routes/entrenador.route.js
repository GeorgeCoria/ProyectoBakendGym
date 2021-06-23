//defino controlador para el manejo de CRUD
const entrenadorCtrl = require('./../controllers/entrenador.controller');
const authCtrl = require('../controllers/auth.controller')
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/:id', authCtrl.verifyToken, entrenadorCtrl.getEntrenador);
router.get('/', authCtrl.verifyToken, entrenadorCtrl.getEntrenadores);
router.post('/', authCtrl.verifyToken, entrenadorCtrl.addEntrenador);
router.delete('/:id', authCtrl.verifyToken, entrenadorCtrl.deleteEntrenador);
router.put('/:id', authCtrl.verifyToken, entrenadorCtrl.editEntrenador);

//exportamos el modulo de rutas
module.exports = router;