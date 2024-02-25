const router = require('express').Router()



const itemController = require('../../controller/item/itemControll')
try {
    router.get('/item', itemController.createItem)



} catch (error) {
    console.error('error happen in item route page', error)
}


module.exports = router