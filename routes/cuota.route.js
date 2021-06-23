//defino controlador para el manejo de CRUD
const cuotaCtrl = require('./../controllers/cuota.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/:id', cuotaCtrl.getCuota);
router.get('/', cuotaCtrl.getCuotas);
router.post('/', cuotaCtrl.addCuota);
router.delete('/:id', cuotaCtrl.deleteCuota);
router.put('/:id', cuotaCtrl.editCuota);
router.get('/', cuotaCtrl.getCuotasFilter);
router.get('/alumno/:id', cuotaCtrl.getCuotaByAlumno)


//exportamos el modulo de rutas
module.exports = router;