

const router = require('express').Router()


const serviceController = require('../../controller/service/service')

router.get('/service' , serviceController.newService)




module.exports = router