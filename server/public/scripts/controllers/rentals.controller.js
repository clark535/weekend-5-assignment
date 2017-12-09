app.controller('RentalsController', ['RentalsService', function(RentalsService){//dependency injection
    var self = this;

    console.log(RentalsService.rentals);
    self.rentals = RentalsService.rentals;//links view and service.
    RentalsService.getRentals();
    self.addNewRental = RentalsService.addNewRental;
    self.deleteRentals = RentalsService.deleteRentals;
}]);