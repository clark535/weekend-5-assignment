var express = require('express');
var bodyParser = require('body-parser');
var listings = require('./routes/listings');
var rentals = require('./routes/rentals');
require('./modules/realestate-connections.js');
//var game = require('./routes/game.js');

var app = express();

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public'));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- DATABASE CONNECTION ---------- **/
 // module to spin up mongoose

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/listings', listings);
app.use('/rentals', rentals);

/** ---------- START SERVER ---------- **/
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('Listening on port: ', port);
});
