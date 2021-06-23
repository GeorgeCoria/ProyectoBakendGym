const Usuario = require("./../models/usuario");
const usuarioCtrl = {};
const jwt = require('jsonwebtoken');


usuarioCtrl.loginUsuario = async (req, res) => {
  //en req.body se espera qu vengan las credenciales de login
  //defino los criterios de busqueda en base al username y password recibidos
  const criteria = {
    username: req.body.username,
    password: req.body.password
  }
  //el método findOne retorna un objeto que cumpla con los criterios de busqueda
  Usuario.findOne(criteria, function (err, user) {
    //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    if (err) {
      res.json({
        status: 0,
        msg: 'error'
      })
    };
    if (!user) {
      res.json({
        status: 0,
        msg: "not found"
      })
    } else {
      const unToken = jwt.sign({id: user._id}, "secretkey");
      res.json({
        status: 1,
        msg: "success operation",
        username: user.username,
        rol: user.rol,
        id: user._id,
        state: user.state,
        token: unToken
      });
    }
  })
}

usuarioCtrl.getUsuarios = async (req, res) => {
  var usuarios = await Usuario.find();
  res.json(usuarios);
}

usuarioCtrl.addUsuario = async (req, res) => {
  var usuario = new Usuario(req.body);
  try {
    await usuario.save();
    res.json({
      'status': '1',
      'msg': 'Usuario guardado.'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error procesando operacion.'
    })
  }
}

usuarioCtrl.getUsuario = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario);
}

usuarioCtrl.getUsuarioByUserAndPassword = async (req, res) => {
  const usuario = await Usuario.findOne({ username: req.params.username, password: req.params.password });
  res.json(usuario);
}

usuarioCtrl.getUsuarioByUsername = async (req, res) => {
    const usuario = await Usuario.findOne({ username: req.params.username });
    res.json(usuario);
}

usuarioCtrl.editUsuario = async (req, res) => {
  const vusuario = new Usuario(req.body);
  try {
    await Usuario.updateOne({ _id: req.body._id }, vusuario);
    res.json({
      'status': '1',
      'msg': 'Usuario updated'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error procesando la operacion'
    })
  }
}

usuarioCtrl.deleteUsuario = async (req, res) => {
  try {
    await Usuario.deleteOne({ _id: req.params.id });
    res.json({
      status: '1',
      msg: 'Usuario removed'
    })
  } catch (error) {
    res.json({
      'status': '0',
      'msg': 'Error procesando la operacion'
    })
  }
}

module.exports = usuarioCtrl;