const express = require('express');
const path = require('path');
const contact = require('./model/model');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const frontendPath = path.join(__dirname, '..', '..', 'frontend');
app.use(express.static(frontendPath));

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                message: 'Name, email and message are required'
            });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const savedContact = await contact.create({
            name: name.trim(),
            email: normalizedEmail,
            message: message.trim()
        });

        return res.status(201).json({
            message: 'Contact information saved successfully',
            data: savedContact
        });
    } catch (error) {
        console.error('Error saving contact information:', error);

        if (error.code === 11000) {
            return res.status(409).json({
                message: 'This email is already registered in contacts'
            });
        }

        return res.status(500).json({
            message: 'Failed to save contact information'
        });
    }
});
module.exports = app;
