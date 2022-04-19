const { count } = require("console")
const batchModel = require("../models/batchModel")

const developerModel= require("../models/developerModel")


const createdeveloper= async function (req, res) {
    let batch = req.body
    let batchid = batch.developer
  let developer= await developerModel.create(batch)
  res.send({msg: developer})
}

const scholardevelopers = async (req, res)=>{
  let scholardevelopers=req.body
  let scholarsdevelopers= await  developerModel.find({gender:"female"}).where('percentage').gte(75)
  res.send({msg:scholarsdevelopers})
}


 

module.exports.createdeveloper= createdeveloper
module.exports.scholardevelopers=scholardevelopers
