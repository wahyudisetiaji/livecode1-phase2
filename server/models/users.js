const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'username is required'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: 6,
    }
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

var User = mongoose.model('User', userSchema);

module.exports = User