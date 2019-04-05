let mongoose = require('mongoose');

let projectSchema = new mongoose.Schema({
    url: String
})

module.exports = mongoose.model('Project', projectSchema);