const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection_structure = new Schema({
  inventory: [{ type: String }],
  profile: [{ type: String,  default:['subarashi_logo','jetha_dance'] }],
  badges: [{ type: String,  default:['subarashi','dance','catkiss','nezuko_nice'] }],
  font: [{ type: String , default:['poppins','Roboto']}],
  banner: [{ type: String,  default:["val_bg1","val_bg2"] }],
  curbadges: [{ type: String, default:['subarashi','dance','catkiss','nezuko_nice']  }],
  rankimages :[{ type: String, default:['subarashi','dabi']  }],
  rankcolor : {
    type : String,
    default:"#E42753"
  },
  currankimg : {
    type : String,
    default:"subarashi"
  },
  color:{
    type: String,
    default: "#000"
  },
  userid: {
    type: String,
    default: null
  },
  points: {
    type: Number,
    default: 0
  },
  curprofile: {
    type: String,
    default: 'Subarashi'
  },
  curprofilebg: {
    type: String,
    default: 'val_bg1'
  },
  curFont: {
    type: String,
    default: 'poppins'
  },
  description: {
    type: String,
    default: 'Go Beyond! PLUS... ULTRAAAAA!'
  },
  balancerp: {
    type: Number,
    default: 500
  }, 
  balancekin: {
    type: Number,
    default: 500
  },
  daily: {
    type: String,
    default: null
  },
  level: {
    type: Number,
    default: 0
  },
  work: {
    type: String,
    default: null
  },
  lastwork: {
    type: String,
    default: null
  },
  birthday:
    {
      type: String,
      default: null
    }
})
const collections = mongoose.model('Userdata', collection_structure)
module.exports = collections
