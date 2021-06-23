const RegistroDieta = require('../models/registroDieta');
const registroDietaCtrl = {}

registroDietaCtrl.getRegistrosDieta = async (req, res) => {
    var registros = await RegistroDieta.find();
    res.json(registros);
}

registroDietaCtrl.addRegistroDieta = async (req, res) => {
    var registro = new RegistroDieta(req.body);
    try {
        await registro.save();
        res.json({
            'status': '1',
            'msg': 'RegistroDieta guardada.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

registroDietaCtrl.getRegistroDieta = async (req, res) => {
    const registro = await RegistroDieta.findById(req.params.id);
    res.json(registro);
}

registroDietaCtrl.editRegistroDieta = async (req, res) => {
    const vregistro = new RegistroDieta(req.body);
    try {
        await RegistroDieta.updateOne({_id: req.body._id}, vregistro);
        res.json({
            'status': '1',
            'msg': 'RegistroDieta updated'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}

registroDietaCtrl.deleteRegistroDieta = async (req, res)=>{
 try {
    await RegistroDieta.deleteOne({_id: req.params.id});
    res.json({
        status: '1',
        msg: 'RegistroDieta removed'
 })
 } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
 }
}

module.exports = registroDietaCtrl;