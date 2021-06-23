const Rutina = require('../models/rutina');
const rutinaCtrl = {}

  rutinaCtrl.getRutinas = async (req, res) => {
      var rutinas = await Rutina.find();
      res.json(rutinas);
  }
  
  rutinaCtrl.addRutina = async (req, res) => {
      var rutina = new Rutina(req.body);
      try {
          await rutina.save();
          res.json({
              'status': '1',
              'msg': 'Rutina guardada.'
          })
      } catch (error) {
          res.json({
              'status': '0',
              'msg': 'Error procesando operacion.'
          })
      }
  }
  
  rutinaCtrl.getRutina = async (req, res) => {
      const rutina = await Rutina.findById(req.params.id);
      res.json(rutina);
  }
  
  rutinaCtrl.editRutina = async (req, res) => {
      const vrutina = new Rutina(req.body);
      try {
          await Rutina.updateOne({_id: req.body._id}, vrutina);
          res.json({
              'status': '1',
              'msg': 'Rutina updated'
          })
      } catch (error) {
      res.json({
          'status': '0',
          'msg': 'Error procesando la operacion'
      })
      }
  }
  
  rutinaCtrl.deleteRutina = async (req, res)=>{
   try {
      await Rutina.deleteOne({_id: req.params.id});
      res.json({
          status: '1',
          msg: 'Rutina removed'
   })
   } catch (error) {
      res.json({
          'status': '0',
          'msg': 'Error procesando la operacion'
      })
   }
  }
  
//Metodo que filtra las rutinas segun el id del alumno
rutinaCtrl.getRutinasByAlumno = async (req, res) => {
    try {
      const rutinasEncontradas = await Rutina.find({alumno: req.params.id,}).populate("ejercicio");
      console.log(rutinasEncontradas);
      res.json(rutinasEncontradas);
    } catch (error) {
      res.json({
        status: "0",
        msg: "Error procesando operacion.",
      });
    }
  };




  rutinaCtrl.getRutinasByAlumnoYMes = async (req, res)=>{


    try {
        const logsEncontrados = await Rutina.find({ alumno: req.params.id, mes:req.params.mes}).populate("ejercicio");
        res.json(logsEncontrados);
      } catch (error) {
        res.json({
          status: "0",
          msg: "Error procesando operacion.",
        });
      }
    };
  






  module.exports = rutinaCtrl;