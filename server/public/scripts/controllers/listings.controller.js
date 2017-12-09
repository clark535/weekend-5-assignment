app.controller('ListingsController', ['ListingsService', function(ListingsService){//dependency injection
    var self = this;

    console.log(ListingsService.listings);
    self.listings = ListingsService.listings;//links view and service.
    ListingsService.getListings();
    self.addNewListing = ListingsService.addNewListing;
    // self.deleteHeroes = HeroesService.deleteHeroes;
}]);