const router = require('express').Router()
const asyncHandler = require('express-async-handler')


router.get("/", asyncHandler(async (req, res, next) => {
    try {
        res.status(201).json({ "hello": "code click 1" });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));

module.exports = router