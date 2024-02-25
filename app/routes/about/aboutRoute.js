const router = require('express').Router()
const aboutController = require('../../controller/about/aboutControll')
try {
    router.get('/about', aboutController.createAbout)


} catch (error) {
    console.error('error happen in about route page', error)
}





module.exports = router

