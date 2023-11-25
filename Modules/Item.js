/* eslint-disable no-undef */
const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Flooring', 'Other', 'Plumbing', 'Concrete & Masonry', 'Electrical & Lighting']
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Items', ItemSchema)