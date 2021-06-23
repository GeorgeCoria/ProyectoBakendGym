//defino controlador para el manejo de CRUD
const cuotaCtrl = require('./../controllers/cuota.controller');
const authCtrl = require('../controllers/auth.controller')
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/:id', authCtrl.verifyToken, cuotaCtrl.getCuota);
router.get('/',  cuotaCtrl.getCuotas);
router.post('/', authCtrl.verifyToken, cuotaCtrl.addCuota);
router.delete('/:id', authCtrl.verifyToken, cuotaCtrl.deleteCuota);
router.put('/:id', authCtrl.verifyToken, cuotaCtrl.editCuota);
router.get('/',  cuotaCtrl.getCuotasFilter);
router.get('/alumno/:id', authCtrl.verifyToken, cuotaCtrl.getCuotaByAlumno)


//exportamos el modulo de rutas
module.exports = router;