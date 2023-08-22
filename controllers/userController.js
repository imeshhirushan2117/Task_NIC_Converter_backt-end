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

// get All Users
exports.getAllUsers = async (req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    }catch(error){
        res.status(500).json({error: 'Failed to fetch users.' })
    }
}
