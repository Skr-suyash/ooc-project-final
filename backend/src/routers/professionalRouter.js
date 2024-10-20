const express = require("express");
const router = new express.Router();

const professionalModel = require("../models/professionalModel");
const jobModel = require("../models/jobModel");

router.post("/professional-submit", async (req, res) => {
  let { name, email, phone, type, city, role } = req.body;
  let professional = await professionalModel.create({
    name: name,
    email: email,
    phone: phone,
    type: type,
    city: city,
    role: role,
  });
  res.status(200).send(professional);
});

router.get("/get-professional/:role", async (req, res) => {
  let { role } = req.params;
  let list = await professionalModel.find({ role: role });
  if (list) {
    console.log(list);
    res.send(list);
  }
});

router.get("/get-professional", async (req, res) => {
  let { email } = req.params;
  let user = await professionalModel.find({ email: email });
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("User not found");
  }
});

router.post("/professional-dashboard", async (req, res) => {
  let { email } = req.body;
  let professional = await professionalModel.findOne({ email: email });
  if (professional) {
    let prof_phone = professional.phone;
    console.log(prof_phone);
    let jobs = await jobModel.find({ prof_phone: prof_phone });
    res.status(200).json({
      name: professional.name,
      pending_jobs: jobs,
    });
  } else {
    res.send("user not found");
  }
});

/* Route to get ema */

module.exports = router;
