const express = require('express');
const router = new express.Router();

const professionalModel = require('../models/professionalModel');

router.post('/professional-submit', async (req, res) => {
    let { name, email, phone, type, city, skills, role } = req.body;
    let professional = await professionalModel.create({
        name: name,
        email: email,
        phone: phone,
        type: type,
        city: city,
        skills: skills,
        role: role,
    })
    res.status(200).send(professional);
});

router.get('/get-professional/:type', async (req, res) => {
    let { type } = req.params;
    let list = await professionalModel.find({ type: type });
    if (list) {
        res.send(list);
    }

}); 

/* Route to get ema */

module.exports = router;