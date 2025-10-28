const modelPlan = require("../models/plan.models")

const addNewPlan = async (req, res) => {
    try {
        const newPlan = req.body
        console.log(req.informacionCliente)
        const idInserted = await modelPlan.insertPlan(newPlan)
        res.status(202).json({ success: true, id: idInserted })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { addNewPlan }