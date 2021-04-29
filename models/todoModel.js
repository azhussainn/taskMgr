const mongoose = require('mongoose')

const todosTemplate = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    priority : {
        type : String,
        required : true
    },

    createdAt : {
        type : Date,
        required : true
    },

    dueDate : {
        type : Date,
        required : true
    },

    taskStatus : {
        type : String,
        required : true
    }

})

module.exports = mongoose.model('myTable', todosTemplate)