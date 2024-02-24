const router = require('express').Router()
const asyncHandler = require('express-async-handler')
const Item = require('../../models/item')


router.get('/item', asyncHandler(async (req, res, next) => {
  try {
    // const title = req.body.title
    // const description = req.body.description
    // const photo = req.body.photo

    // console.log(title, description, photo)


    // const newItem = await Item.create({
    //     title,
    //     description,
    //     photo
    // });
    // const allItem = await Item.findAll()
    const data = [
      {
        id: 1, "title": "lorem is the best title", "description": "lorem is the best title lorem is the best title"
      }, {

        id: 1, "title": "lorem is the best title", "description": "lorem is the best title lorem is the best title"
      }

    ]

    res.status(200).json(data);
  } catch (error) {
    console.error('Error creating new item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}));

module.exports = router