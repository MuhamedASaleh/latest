const asyncHandler = require('express-async-handler')
const AboutModel = require('../../models/about')

exports.createAbout = asyncHandler(async (req, res, next) => {
  try {



    const newAbout = await AboutModel.findAll()



    res.status(200).json({ data : newAbout });
            

  } catch (error) {
    console.error('error happend in creating new about controller', error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



