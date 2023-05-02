const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        validators: [validator.isEmail, 'Entered email is Invalid']
    },
    password: {
        type: String,
        required: [true, 'Please set a password'],
        select: false
    }
})

userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})

module.exports = mongoose.model('User', userSchema)