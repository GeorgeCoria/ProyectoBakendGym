const dietaCtrl = require('../controllers/dieta.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/:id', dietaCtrl.getDieta);
router.get('/', dietaCtrl.getDietas);
router.post('/', dietaCtrl.addDieta);
router.delete('/:id', dietaCtrl.deleteDieta);
router.put('/:id', dietaCtrl.editDieta);

module.exports = router;