const express = require("express");
const router = express.Router();
const authCtrl = require('../controllers/auth.controller')
//defino controlador para el manejo de CRUD
const usuarioCtrl = require('./../controllers/usuario.controller');
// definiendo rutas
router.get('/:id', authCtrl.verifyToken, usuarioCtrl.getUsuario);
router.get('/', authCtrl.verifyToken, usuarioCtrl.getUsuarios);
router.get('/validar/:username', authCtrl.verifyToken,usuarioCtrl.getUsuarioByUsername);
router.get('/:username/:password', authCtrl.verifyToken, usuarioCtrl.getUsuarioByUserAndPassword);
router.post('/', authCtrl.verifyToken, usuarioCtrl.addUsuario);
router.delete('/:id', authCtrl.verifyToken, usuarioCtrl.deleteUsuario);
router.put('/:id', authCtrl.verifyToken,  usuarioCtrl.editUsuario);
router.post('/login', usuarioCtrl.loginUsuario);

//exportacion del modulo de rutas
module.exports = router;
