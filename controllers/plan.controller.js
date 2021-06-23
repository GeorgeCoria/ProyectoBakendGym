const Plan = require('../models/plan');
const planCtrl = {}

planCtrl.getPlanes = async (req, res) => {
    var planes = await Plan.find();
    res.json(planes);
}

planCtrl.addPlan = async (req, res) => {
    var plan = new Plan(req.body);
    try {
        await plan.save();
        res.json({
            'status': '1',
            'msg': 'Plan guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

planCtrl.getPlan = async (req, res) => {
    const plan = await Plan.findById(req.params.id);
    res.json(plan);
}

planCtrl.editPlan = async (req, res) => {
    const vplan = new Plan(req.body);
    try {
        await Plan.updateOne({ _id: req.body._id }, vplan);
        res.json({
            'status': '1',
            'msg': 'Plan updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

planCtrl.deletePlan = async (req, res) => {
    try {
        await Plan.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Plan removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

module.exports = planCtrl;