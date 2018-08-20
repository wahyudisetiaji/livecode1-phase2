const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    price: {
        type: Number,
        required: [true, 'price is required'],
    },
    stock: {
        type: Number,
        required: [true, 'stock is required'],
    },
    tags: [
        {type: String, required: [true, 'tags is required']}
    ],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item