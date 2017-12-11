var express = require('express');
var router = express.Router();
var Rentals = require('../models/rental.schema');

router.get('/', function(req, res){
    // a get request for all games
    Rentals.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with rental find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});//end GET for rentals page

router.post('/', function(req, res){
    // a get request for all games
    var addRentals = new Rentals(req.body);

    addRentals.save(function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with Rental save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});//end POST for rentals page

router.delete('/', function(req, res){
    //var deleteRentals = req.query;
    
        Rentals.findByIdAndRemove(req.query._id, function(errorMakingDatabaseQuery, data){
                if (errorMakingDatabaseQuery) {
                    console.log('error with Rental delete', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            });
  });//end database for rentals page delete 


module.exports = router;