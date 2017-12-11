var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// this will enforce our object properties
var rentalSchema = new Schema({
    rent: { type: Number },
    sqft: { type: Number },
    city: { type: String }
});//end new rentals constructor

module.exports = mongoose.model('Rentals', rentalSchema);