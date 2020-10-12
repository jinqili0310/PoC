/*
 * @Author: Jinqi Li
 * @Date: 2020-08-05 04:28:43
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-10-12 05:10:05
 * @FilePath: /1-BookStore/server/models/Product.js
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    category: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    // price: {
    //     type: Number,
    //     default: 0
    // },
    images: {
        type: Array,
        default: []
    },
    Years: {
        type: Number,
        default: 1
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })


productSchema.index({ 
    title:'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        description: 1,
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }