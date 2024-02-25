const asyncHandler = require('express-async-handler')
const ItemModel = require('../../models/item')


exports.createItem =  asyncHandler(async (req, res, next) => {
  try {
    const title = req.body.title
    const description = req.body.description
    const photo = req.body.photo

    console.log(title, description, photo)


    const newItem = await ItemModel.create({
        title,
        description,
        photo
    });
   

    res.status(200).json(newItem);
  } catch (error) {
    console.error('error happend in creating new item controller' , error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

