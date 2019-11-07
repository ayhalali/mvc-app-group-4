/**
*   Section Model
*
*   @author Terry Woosley
*   @requires mongoose
*
*/

const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    _id:{
        type: Number,
        required: true
    },
    sectionNumber:{
        type: String,
        minlength: 2,
        maxlength: 2,
        required: true,
        default: '00'
    },
    days:{
        type: String,
        minlength: 1,
        maxlength: 3,
        required: true,
        default: ''
    },
    startTime:{
        type: Number,
        minlength: 4,
        maxlength: 4,
        required: true,
        default: 0000
    },
    roomNumber:{
        type: String,
        minlength: 3,
        maxlength: 7,
        required: true,
        default: 'TBA'
    },
    intructorID:{
        type: Number,
        required: true,
        default: 0
    },
    courseID:{
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('Section', sectionSchema);