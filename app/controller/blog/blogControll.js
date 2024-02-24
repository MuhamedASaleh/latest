const router = require('express').Router()
const asyncHandler = require('express-async-handler')
const Blog = require('../../models/blog')


router.get("/blog", asyncHandler(async (req, res, next) => {
    try {
        // const title = req.body.title
        // const description = req.body.description
        // const image = req.body.image

        // console.log(title , description , image)

        // const newBlog = await Blog.create({
        //     title, description, image
        // });

        // const allBlog = await Blog.findAll()
        const data = [
            { "blog 1": "lorem is the best title" }, { "blog 2": "lorem is the best title" }, { "blog 3": "lorem is the best title" }
        ]
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));

module.exports = router