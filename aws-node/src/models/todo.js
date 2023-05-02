const mongoose = require('mongoose')
const validator = require('validator')

const TodoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Todo', TodoSchema)