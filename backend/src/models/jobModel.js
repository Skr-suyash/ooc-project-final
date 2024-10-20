const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  cust_phone: String,
  prof_phone: String,
  address: String,
  price: Number,
  status: {
    type: String,
    default: "Initiated",
  },
});

const jobModel = mongoose.model("job", jobSchema);

module.exports = jobModel;
