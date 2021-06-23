const dietaCtrl = require('../controllers/dieta.controller');
const authCtrl = require('../controllers/auth.controller')

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/:id', authCtrl.verifyToken, dietaCtrl.getDieta);
router.get('/', authCtrl.verifyToken, dietaCtrl.getDietas);
router.post('/', authCtrl.verifyToken, dietaCtrl.addDieta);
router.delete('/:id', authCtrl.verifyToken, dietaCtrl.deleteDieta);
router.put('/:id', authCtrl.verifyToken, dietaCtrl.editDieta);

module.exports = router;