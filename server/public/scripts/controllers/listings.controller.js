app.controller('ListingsController', ['ListingsService', function(ListingsService){//dependency injection
    var self = this;

    console.log(ListingsService.listings);
    // self.games = GamesService.games;//links view and service.
    // GamesService.getGames();
    // self.addNewGame = GamesService.addNewGame;
    // self.deleteHeroes = HeroesService.deleteHeroes;
}]);