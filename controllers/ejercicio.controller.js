const Ejercicio = require("../models/ejercicio");
const ejercicioCtrl = {};


ejercicioCtrl.getEjercicios = async (req, res) => {
  let criterios = {};
  if(req.query.nombre != '') 
    criterios.nombre = { $regex: req.query.nombre, $options: "i" }
  var ejercicios = await Ejercicio.find(criterios);
  res.json(ejercicios);
}

ejercicioCtrl.addEjercicio = async (req, res) => {
  var ejercicio = new Ejercicio(req.body);
  try {
      await ejercicio.save();
      res.json({
          'status': '1',
          'msg': 'Ejercicio guardado.'
      })
  } catch (error) {
      res.json({
          'status': '0',
          'msg': 'Error procesando operacion.'
      })
  }
}

ejercicioCtrl.getEjercicio = async (req, res) => {
  const ejercicio = await Ejercicio.findById(req.params.id);
  res.json(ejercicio);
}

ejercicioCtrl.editEjercicio = async (req, res) => {
  const vejercicio = new Ejercicio(req.body);
  try {
      await Ejercicio.updateOne({_id: req.body._id}, vejercicio);
      res.json({
          'status': '1',
          'msg': 'Ejercicio updated'
      })
  } catch (error) {
  res.json({
      'status': '0',
      'msg': 'Error procesando la operacion'
  })
  }
}

ejercicioCtrl.deleteEjercicio = async (req, res)=>{
  try {
      await Ejercicio.deleteOne({_id: req.params.id});
      res.json({
          status: '1',
          msg: 'Ejercicio removed'
    })
  } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
  }
}

module.exports = ejercicioCtrl;
