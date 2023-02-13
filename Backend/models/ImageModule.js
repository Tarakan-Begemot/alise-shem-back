import mongoose from 'mongoose';

const ImageSchema = mongoose.Schema({
  name :{
    type: String,
    require: true
  },
  Password :{
    type: Number,
    require: true,
    default: false
  },
  image:{
    data:Buffer,
    contentType: String,
  },
  timestamps:{
    type: Boolean,
    require: true,
  },
});
module.exports = ImageSchema = mongoose.model('imageModel', ImageSchema)



