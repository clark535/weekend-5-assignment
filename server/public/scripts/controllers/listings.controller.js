app.controller('ListingsController', ['ListingsService', function(ListingsService){//dependency injection
    var self = this;

    console.log(ListingsService.listings);
    self.listings = ListingsService.listings;//links view and service.
    // GamesService.getGames();
    // self.addNewGame = GamesService.addNewGame;
    // self.deleteHeroes = HeroesService.deleteHeroes;
}]);