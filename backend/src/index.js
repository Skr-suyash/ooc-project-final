const express = require('express');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('./db');

const app = express();
const userModel = require('./models/userModel');
const { log } = require('console');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Base Page');
});

app.post('/login', async (req, res) => {
    console.log(req.body.email);
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) {
        res.status(401).json('Invalid email or password');
    }
    else {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result) {
                let token = jwt.sign({ email: user.email }, 'key');
                res.cookie('token', token);
                res.status(200).json(user);
            }
            else {
                res.status(401).send('Invalid email or password');
            }
        })
    }
});

app.post('/signup', async (req, res) => {
    let { name, email, password } = req.body;

    let existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
        res.status(401).send("User with the same email exists");
    }
    else {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                let user = await userModel.create({
                    name,
                    email,
                    password: hash,
                    reset_token: '',
                });

                let token = jwt.sign({ email }, 'key');
                res.cookie('token', token);
                res.status(200).json(user);
            });
        });
    }
});

app.post('/logout', (req, res) => {
    res.cookie('token', '');
    res.status(200).send('succesfully logged out');
});

app.post('/forgot-password', async (req, res) => {
    let { email } = req.body;
    let user = await userModel.findOne({ email: email });
    if (user) {
        const token = crypto.randomBytes(20).toString('hex');
        console.log('token: ' + token);
        try {
            await userModel.updateOne({email: email}, {$set: {reset_token: token}});
            console.log(user);
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'testr7606@gmail.com',
                    pass: 'txqywilohztodhnq',
                }
            });
            const mailOptions = {
                from: 'testr7606@gmail.com',
                to: email,
                subject: 'Password Reset',
                text: `Click the following link to reset your password: http://localhost:8000/reset-password/${token}`,
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    res.status(500).send('Error sending email');
                } else {
                    console.log(`Email sent: ${info.response}`);
                    res.status(200).send('Check your email for instructions on resetting your password');
                }
            });
        }
        catch (err) {
            res.status(400).send(err);
        }
    } else {
        res.status(404).send('Email not found');
    }
});

// Route to handle the reset token
app.get('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    // Check if the token exists and is still valid
    let user = await userModel.findOne({ reset_token: token });
    console.log(`Token: ${token}`)
    if (user) {
        // Render a form for the user to enter a new password
        res.send(`<form method="post" action="/set-password/${token}"><input type="password" name="password" required><input type="submit" value="Reset Password"></form>`);
    } else {
        res.status(404).send('Invalid or expired token');
    }
});

// Route to update the password
app.post('/set-password/:token', async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    // Find the user with the given token and update their password
    console.log(token, password);
    const user = await userModel.findOne({reset_token: token});
    if (user) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                await userModel.updateOne({reset_token: token}, {$set: {password: hash, reset_token: ''}});
            });
        })
        res.status(200).send('Password updated successfully');
    } else {
        res.status(404).send('Invalid or expired token');
    }
});

app.get('/users', async (req, res) => {
    let users = await userModel.find();
    if (users) {
        res.status(200).json(users);
    }
});

app.get('/send-email', (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'testr7606@gmail.com',
            pass: 'txqywilohztodhnq',
        }
    });
    const mailOptions = {
        from: 'testr7606@gmail.com',
        to: 'suyashkumar2005@gmail.com',
        subject: 'Password Reset',
        text: `hello world`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log(`Email sent: ${info.response}`);
            res.status(200).send('Check your email for instructions on resetting your password');
        }
    });
});


app.listen(8000);