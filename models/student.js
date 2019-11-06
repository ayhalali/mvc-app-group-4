/**
*  Developer model
*  Describes the characteristics of each attribute in a developer resource.
*
* @author Xizi Chen
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'First name'
  },
  lastname: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Last name'
  },
  phonenumber: {
    type: String,
    required: false,
    unique: ture
  }

})
module.exports = mongoose.model('Student', studentSchema)
