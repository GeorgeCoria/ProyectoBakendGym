const registroDietaCtrl = require('../controllers/registroDieta.controller');
const authCtrl = require('../controllers/auth.controller')

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/:id', authCtrl.verifyToken, registroDietaCtrl.getRegistroDieta);
router.get('/', authCtrl.verifyToken, registroDietaCtrl.getRegistrosDieta);
router.post('/', authCtrl.verifyToken, registroDietaCtrl.addRegistroDieta);
router.delete('/:id', authCtrl.verifyToken, registroDietaCtrl.deleteRegistroDieta);
router.put('/:id', authCtrl.verifyToken, registroDietaCtrl.editRegistroDieta);

module.exports = router;