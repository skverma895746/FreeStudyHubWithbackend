const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
});
const contact = mongoose.model('Contact', contactSchema);
module.exports = contact;
