const Alumno = require("../models/alumno");
const alumnoCtrl = {};

alumnoCtrl.getAlumnos = async (req, res) => {
  let criterios = {};
  if(req.query.apellido != '') 
    criterios.apellido = { $regex: req.query.apellido, $options: "i" }
  if(req.query.dni != '')
    criterios.dni = { $regex: req.query.dni, $options: "i" }

  let alumnos = await Alumno.find(criterios).populate("plan").populate("usuario");
  res.json(alumnos);
};

alumnoCtrl.addAlumno = async (req, res) => {
  var alumno = new Alumno(req.body);
  try {
      await alumno.save();
      res.json({
          'status': '1',
          'msg': 'Alumno guardado.'
      })
  } catch (error) {
      res.json({
          'status': '0',
          'msg': 'Error procesando operacion.'
      })
  }
}

alumnoCtrl.getAlumno = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id).populate("plan").populate("usuario");
  res.json(alumno);
}

alumnoCtrl.editAlumno = async (req, res) => {
  const vAlumno = new Alumno(req.body);
  try {
      await Alumno.updateOne({_id: req.body._id}, vAlumno);
      res.json({
          'status': '1',
          'msg': 'Alumno updated'
      })
  } catch (error) {
  res.json({
      'status': '0',
      'msg': 'Error procesando la operacion'
  })
  }
}

alumnoCtrl.deleteAlumno = async (req, res)=>{
  try {
      await Alumno.deleteOne({_id: req.params.id});
      res.json({
          status: '1',
          msg: 'Alumno removed'
    })
  } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
  }
}

module.exports = alumnoCtrl;
