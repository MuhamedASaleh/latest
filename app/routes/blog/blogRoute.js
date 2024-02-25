const router = require('express').Router()
const blogController = require('../../controller/blog/blogControll')
try {
router.get('/blog', blogController.newBlog)


} catch (error) {
    console.error('error happen in blog route page', error)
}





module.exports = router