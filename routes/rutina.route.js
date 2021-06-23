//defino controlador para el manejo de CRUD
const rutinaCtrl = require('./../controllers/rutina.controller');
const authCtrl = require('../controllers/auth.controller')
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/:id', authCtrl.verifyToken, rutinaCtrl.getRutina);
router.get('/getRutinas/:id', authCtrl.verifyToken, rutinaCtrl.getRutinasByAlumno);
router.get('/getRutinasAluMes/:id/:mes', authCtrl.verifyToken, rutinaCtrl.getRutinasByAlumnoYMes);

router.get('/',authCtrl.verifyToken,  rutinaCtrl.getRutinas);
router.post('/', authCtrl.verifyToken, rutinaCtrl.addRutina);
router.delete('/:id', authCtrl.verifyToken, rutinaCtrl.deleteRutina);
router.put('/:id', authCtrl.verifyToken, rutinaCtrl.editRutina);

//exportamos el modulo de rutas
module.exports = router;