//defino controlador para el manejo de CRUD
const entrenadorCtrl = require('./../controllers/entrenador.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/:id', entrenadorCtrl.getEntrenador);
router.get('/', entrenadorCtrl.getEntrenadores);
router.post('/', entrenadorCtrl.addEntrenador);
router.delete('/:id', entrenadorCtrl.deleteEntrenador);
router.put('/:id', entrenadorCtrl.editEntrenador);

//exportamos el modulo de rutas
module.exports = router;