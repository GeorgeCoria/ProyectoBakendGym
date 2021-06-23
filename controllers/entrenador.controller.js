const Entrenador = require("../models/entrenador");
const entrenadorCtrl = {};

entrenadorCtrl.getEntrenadores = async (req, res) => {
  var entrenadores = await Entrenador.find();
  res.json(entrenadores);
}

entrenadorCtrl.addEntrenador = async (req, res) => {
  var entrenador = new Entrenador(req.body);
  try {
      await entrenador.save();
      res.json({
          'status': '1',
          'msg': 'Entrenador guardado.'
      })
  } catch (error) {
      res.json({
          'status': '0',
          'msg': 'Error procesando operacion.'
      })
  }
}

entrenadorCtrl.getEntrenador = async (req, res) => {
  const entrenador = await Entrenador.findById(req.params.id);
  res.json(entrenador);
}

entrenadorCtrl.editEntrenador = async (req, res) => {
  const ventrenador = new Entrenador(req.body);
  try {
      await Entrenador.updateOne({_id: req.body._id}, ventrenador);
      res.json({
          'status': '1',
          'msg': 'Entrenador updated'
      })
  } catch (error) {
  res.json({
      'status': '0',
      'msg': 'Error procesando la operacion'
  })
  }
}

entrenadorCtrl.deleteEntrenador = async (req, res)=>{
try {
  await Entrenador.deleteOne({_id: req.params.id});
  res.json({
      status: '1',
      msg: 'Entrenador removed'
})
} catch (error) {
  res.json({
      'status': '0',
      'msg': 'Error procesando la operacion'
  })
}
}

module.exports = entrenadorCtrl;