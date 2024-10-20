const mongoose = require("mongoose");

const professionalSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  type: {
    type: String,
  },
  city: String,
  rating: {
    type: Number,
    default: 0,
  },
  skills: Array,
  role: {
    type: String,
    default: "Customer",
  },
  reviews: {
    type: Array,
    default: [],
  },
});

const professionalModel = mongoose.model("professional", professionalSchema);

module.exports = professionalModel;
