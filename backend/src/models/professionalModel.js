const mongoose = require('mongoose');

const professionalSchema = mongoose.Schema({
    "name": String,
    "email": String,
    "phone": Number,
    "type": {
        type: String,
        enum: [
            "Women's Beauty",
            "Men's Salon and Message",
            "AC and Appliance Repair",
            "Cleaning and Pest Control",
            "Electrician",
            "Plumber",
            "Carpenter",
            "Water Purifier",
            "Painting",
            "Wall Panels",
        ],
    },
     "city": String,
     "rating": {
        type: Number,
        default: 0,
     },
     "skills": Array,
     "role": {
        type: String,
        enum: ['Customer', 'Professional'],
        default: 'Customer',
     },
     "reviews": {
        type: Array,
        default: [],
     }
});

const professionalModel = mongoose.model("professional", professionalSchema);

module.exports = professionalModel;