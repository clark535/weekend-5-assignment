app.controller('ListingsController', ['ListingsService', function(ListingsService){//dependency injection
    var self = this;

    console.log(ListingsService.listings);
    self.listings = ListingsService.listings;//links view and service.
    ListingsService.getListings();//calls the GET function for the listing collection
    self.addNewListing = ListingsService.addNewListing;//connects the add function in services to the listings view
    self.deleteListings = ListingsService.deleteListings;//connects the delete function for listings
}]);