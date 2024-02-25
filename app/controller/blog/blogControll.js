const asyncHandler = require('express-async-handler')
const Blog = require('../../models/blog')


exports.newBlog = asyncHandler(async (req, res, next) => {
    try {
        const title = req.body.title
        const description = req.body.description
        const image = req.body.image

        console.log(title, description, image)

        const newBlog = await Blog.create({
            title, description, image
        });

        res.status(200).json(newBlog);
    } catch (error) {
        console.error('error happend in creating newblog controller' , error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

