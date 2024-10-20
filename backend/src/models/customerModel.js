const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
  type: String,
});

const customerModel = mongoose.model("customer", customerSchema);

module.exports = customerModel;
