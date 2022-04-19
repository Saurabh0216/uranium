const UserModels = require("../models/userModels")

const createUser = async function(req, res)
{
    let data =req.body
    let savedData = await UserModels.create(data)
    res.send({msg: savedData})
}
const getUsersData= async function(req, res)
{
    let allUsers=await UserModels.find()
    res.send({msg: allUsers})
}

module.exports.createUser=  createUser
module.exports.getUserData= getUsersData