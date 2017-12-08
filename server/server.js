var express = require('express');
var bodyParser = require('body-parser');

var mongooseConnection = require('./modules/realestate-connections.js');
//var game = require('./routes/game.js');

var app = express();

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public'));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- DATABASE CONNECTION ---------- **/
mongooseConnection.connect(); // module to spin up mongoose

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/listings', listings);

/** ---------- START SERVER ---------- **/
var port = 5000;
app.listen(port, function() {
    console.log('Listening on port: ', port);
});
