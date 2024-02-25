

const router = require('express').Router()


const contactController = require('../../controller/contact/contactControl')
router.get('/contact' ,contactController.createContactController )


module.exports = router