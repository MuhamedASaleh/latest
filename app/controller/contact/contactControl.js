


const ContactModel = require('../../models/contact')
const asyncHandler = require('express-async-handler')
exports.createContactController = asyncHandler (async(req,res,next)=>{
    try {
        
        const {name , email , subject , message } = req.body

        console.log(name , email , subject , message)
        const newContact = await ContactModel.findAll()
       res.status(200).json({data:newContact}) 
    } catch (error) {
        console.error('error happed in create contact controller' , error)
        res.status(500).json({data:"error"}) 
    }
})