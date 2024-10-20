const express = require("express");
const router = new express.Router();

const professionalModel = require("../models/professionalModel");

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

/* Route to get ema */

module.exports = router;
