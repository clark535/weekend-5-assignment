var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a new Schema for game
// this will enforce our object properties
// var propertySchema = new Schema({
//     name: { type: String, required: true, unique: true },
//     duration: { type: Number },
//     numberOfPlayers: { type: Number },
//     publishedDate: { type: Date },
//     votes: { type: Number }
// });

module.exports = mongoose.model('Property', propertySchema);