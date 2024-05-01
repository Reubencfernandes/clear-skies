const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection_structure = new Schema({
  Name : {
    type : String
  },
  Temperature : {
    type : String,
  },
  Climate_Info:{
    type: String,
  },
  Long:{
    type:String,
  },
  Lat:{
    type:String,
  },
  Country:{
    type:String,
  },
  Count: {
    type: Number,
    default: 0
  }})
const collections = mongoose.model('list', collection_structure)
module.exports = collections
