const User = require('../models/user')

//create new User
exports.createUser = async (req, res) => {
    try{
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    } catch (error){
        res.status(400).json({error : 'Failed to create user.'})
    }
}