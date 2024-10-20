const express = require('express');
const router = new express.Router();

const customerModel = require('../models/customerModel');
const jobModel = require('../models/jobModel');

router.post('/customer-submit', async (req, res) => {
    let { name, email, phone, city, type } = req.body;
    try {
        let customer = await customerModel.create({
            name: name,
            email: email,
            phone: phone,
            city: city,
            type: type,
        });
        res.status(200).send(customer);
    }
    catch (err) {
        res.send(500).send('internal server error');
    }
});

router.post('/create-job', async (req, res) => {
    let { cust_email, prof_phone, address } = req.body;
    let customer = await customerModel.findOne({ email: cust_email });
    try {
        let job = await jobModel.create({
            cust_phone: customer.phone,
            prof_phone: prof_phone,
            address: address,
        });
        if (job) {
            res.status(200).send(job);
        } else {
            res.status(500);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }

});

/* Route to get ema */

module.exports = router;