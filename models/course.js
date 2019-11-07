/**
*  Developer model
*  Describes the characteristics of each attribute in a developer resource.
*
* @author Dylan Rongey <dylan.rongey@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  SchoolNumber: {
    type: Number,
    minlength: 2,
    maxlength: 2,
    required: true,
  },
  CourseNumber: {
    type: Number,
    minlength: 3,
    maxlength: 3,
    required: true
  },
  Name: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Developing Web Apps and Services'
  },
  inSpring: {
    type: Boolean,
  },
  inSummer: {
    type: Boolean,
  },
  inFall: {
    type: Boolean,
  },
})
module.exports = mongoose.model('Course', CourseSchema)