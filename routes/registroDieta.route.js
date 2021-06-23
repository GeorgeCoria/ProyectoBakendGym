const registroDietaCtrl = require('../controllers/registroDieta.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/:id', registroDietaCtrl.getRegistroDieta);
router.get('/', registroDietaCtrl.getRegistrosDieta);
router.post('/', registroDietaCtrl.addRegistroDieta);
router.delete('/:id', registroDietaCtrl.deleteRegistroDieta);
router.put('/:id', registroDietaCtrl.editRegistroDieta);

module.exports = router;