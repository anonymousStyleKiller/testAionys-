const {Schema, model} = require('mongoose');

const Notes = new Schema({note: {type: String, required: true}});

module.exports = model('Notes', Notes);