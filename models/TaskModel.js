const mongoose = require('mongoose')

const Schema = mongoose.Schema
const TaskSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    is_completed : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Task", TaskSchema)