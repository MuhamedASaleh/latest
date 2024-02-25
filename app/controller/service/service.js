const asyncHandler = require("express-async-handler");

const ServiceModel = require('../../models/service')

exports.newService = asyncHandler(async (req, res, next) => {
    try {
        const title = req.body.title
        const description = req.body.description
        const image = req.body.image
        const serviceData = await ServiceModel.findAll()
        res.status(200).json({ data: serviceData })

    } catch (error) {
        console.error('error happen in service controller', error)
        res.status(500).json({ "state": "error" })
    }
})


