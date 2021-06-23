const Dieta = require('../models/dieta');
const dietaCtrl = {}

dietaCtrl.getDietas = async (req, res) => {
    var dietas = await Dieta.find();
    res.json(dietas);
}

dietaCtrl.addDieta= async (req, res) => {
    var dieta = new Dieta(req.body);
    try {
        await dieta.save();
        res.json({
            'status': '1',
            'msg': 'Dieta guardada.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

dietaCtrl.getDieta = async (req, res) => {
    const dieta = await Dieta.findById(req.params.id);
    res.json(dieta);
}

dietaCtrl.editDieta = async (req, res) => {
    const vDieta = new Dieta(req.body);
    try {
        await Dieta.updateOne({_id: req.body._id}, vDieta);
        res.json({
            'status': '1',
            'msg': 'Dieta updated'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}

dietaCtrl.deleteDieta = async (req, res)=>{
 try {
    await Dieta.deleteOne({_id: req.params.id});
    res.json({
        status: '1',
        msg: 'Dieta removed'
 })
 } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
 }
}

module.exports = dietaCtrl;