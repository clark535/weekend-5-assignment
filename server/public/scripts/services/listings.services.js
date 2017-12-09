app.service('ListingsService', ['$http', function($http){
    var self = this;

    self.listings = {list: [] };
    
   

        self.getListings = function() {
    
            $http({
             method: 'GET',
             url: '/listings'         
             }).then(function(response) {
                 console.log('response', response);
                 self.listings.list = response.data;//this fills up the companies array with the table from the database.
         });
         }

    //      self.addNewGame = function(newGame) {
    //         console.log('post button was clicked')
    //         $http({
    //             method: 'POST',
    //             url: '/game',
    //             data: newGame       
    //             }).then(function(response) {
    //                 console.log('response', response);
    //                 self.newGame = response.data;
    //                 self.newGame = {};
    //                 self.getGames();
    //                 newGame.name = '',
    //                 newGame.duration = '';
    //                 newGame.numberOfPlayers = ''; 
    //                 newGame.publishedDate = '';  
    //             })
    //         };
    self.getListings();

}]);