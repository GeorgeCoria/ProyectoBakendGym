const mesDietaCtrl = require('../controllers/mesDieta.controller');
const authCtrl = require('../controllers/auth.controller')

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/:id', authCtrl.verifyToken, mesDietaCtrl.getMesDieta);
router.get('/', authCtrl.verifyToken, mesDietaCtrl.getMesDietas);
router.post('/', authCtrl.verifyToken, mesDietaCtrl.addMesDieta);
router.delete('/:id', authCtrl.verifyToken, mesDietaCtrl.deleteMesDieta);
router.put('/:id', authCtrl.verifyToken, mesDietaCtrl.editMesDieta);

module.exports = router;