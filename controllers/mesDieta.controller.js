const MesDieta = require('../models/mesDieta');
const mesDietaCtrl = {}

mesDietaCtrl.getMesDietas = async (req, res) => {
    var mesDieta = await MesDieta.find();
    res.json(mesDieta);
}

mesDietaCtrl.addMesDieta = async (req, res) => {
    console.log('entro',req.body)
    var mesDieta = new MesDieta(req.body);
    try {
        await mesDieta.save();
        res.json({
            'status': '1',
            'msg': 'MesDieta guardada.'
        })
    } catch (error) {
        console.log(error);
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

mesDietaCtrl.getMesDieta= async (req, res) => {
    const mesDieta = await MesDieta.findById(req.params.id);
    res.json(mesDieta);
}

mesDietaCtrl.editMesDieta = async (req, res) => {
    const vmesDieta = new MesDieta(req.body);
    try {
        await MesDieta.updateOne({_id: req.body._id}, vmesDieta);
        res.json({
            'status': '1',
            'msg': 'MesDieta updated'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}

mesDietaCtrl.deleteMesDieta = async (req, res)=>{
 try {
    await MesDieta.deleteOne({_id: req.params.id});
    res.json({
        status: '1',
        msg: 'MesDieta removed'
 })
 } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
 }
}

module.exports = mesDietaCtrl;