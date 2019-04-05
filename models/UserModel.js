let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    instrument: String,
    email: String,
    location: String,
    endorsements: Object
})

module.exports = mongoose.model('User', userSchema);