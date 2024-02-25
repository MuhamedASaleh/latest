



const router = require('express').Router()


const homeController = require('../../controller/home/home')
try {    
router.get('/' ,homeController.home )


} catch (error) {
    console.error('error happen in home route page', error)
}




module.exports = router