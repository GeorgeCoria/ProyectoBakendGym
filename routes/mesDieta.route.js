const mesDietaCtrl = require('../controllers/mesDieta.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/:id', mesDietaCtrl.getMesDieta);
router.get('/', mesDietaCtrl.getMesDietas);
router.post('/', mesDietaCtrl.addMesDieta);
router.delete('/:id', mesDietaCtrl.deleteMesDieta);
router.put('/:id', mesDietaCtrl.editMesDieta);

module.exports = router;