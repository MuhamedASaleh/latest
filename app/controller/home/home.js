const asyncHandler = require('express-async-handler')


exports.home =  asyncHandler(async (req, res, next) => {
    try {
        res.status(201).json({ "hello": "code click 1" });
    } catch (error) {
        console.error('error happend in home controller' , error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



