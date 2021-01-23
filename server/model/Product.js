const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    
    ProductID  : {
        type: Number,
        default: 0
    },
    Name : {
        type: String,
        maxlength: 50
    },
    Quantity : {
        type: Number,
    },
    Price: {
        type: Number,
        default: 0
    },
   
    Brand : {
        type: String,
        default: 0
    },
    Model: {
        type: String,
        default: 0
    },
    Category : {
        type: String,
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