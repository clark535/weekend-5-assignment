app.controller('RentalsController', ['RentalsService', function(RentalsService){//dependency injection
    var self = this;

    console.log(RentalsService.rentals);
    self.rentals = RentalsService.rentals;//links view and service.
    RentalsService.getRentals();//calls the GET function for the rentals collection
    self.addNewRental = RentalsService.addNewRental;//connects the add function in services to the rental view
    self.deleteRentals = RentalsService.deleteRentals;//connects the delete function for rentals
}]);