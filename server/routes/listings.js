var express = require('express');
var router = express.Router();
var Listing = require('../models/listing.schema');

router.get('/', function(req, res){
    // a get request for all games
    Listing.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with Listing find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});//end GET for listings page

router.post('/', function(req, res){
    // a get request for all games
    var addListing = new Listing(req.body);

    addListing.save(function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with Listing post', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});//end POST for listings page

router.delete('/', function(req, res){
    //var deleteListings = req.query.id;
    
        Listing.findByIdAndRemove(req.query._id, function(errorMakingDatabaseQuery, data){
                if (errorMakingDatabaseQuery) {
                    console.log('error with Listing delete', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            });
  });//end database delete for listings page 

module.exports = router;