//defino controlador para el manejo de CRUD
const planCtrl = require('./../controllers/plan.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/:id', planCtrl.getPlan);
router.get('/', planCtrl.getPlanes);
router.post('/', planCtrl.addPlan);
router.delete('/:id', planCtrl.deletePlan);
router.put('/:id', planCtrl.editPlan);

//exportamos el modulo de rutas
module.exports = router;