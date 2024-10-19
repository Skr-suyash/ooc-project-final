const express = require('express');
const router = new express.Router();

const customerModel = require('../models/customerModel');

router.post('/customer-submit', async (req, res) => {
    let { name, email, phone, role, city } = req.body;
    try {
        let customer = await customerModel.create({
            name: name,
            email: email,
            phone: phone,
            city: city,
            role: role,
        });
        res.status(200).send(customer);
    }
    catch(err) {
        res.send(500).send('internal server error');
    }
    
});


/* Route to get ema */

module.exports = router;