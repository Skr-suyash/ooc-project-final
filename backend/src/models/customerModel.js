const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    "name": String,
    "email": String,
    "phone": Number,
    "city": String,
    "role": {
        type: String,
        enum: ['Customer', 'Professional'],
        default: 'Customer',
    },
});

const customerModel = mongoose.model("customer", customerSchema);

module.exports = customerModel;