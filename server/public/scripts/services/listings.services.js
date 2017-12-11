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
         };//end function that triggers GET from the database for the listings array

         self.addNewListing = function(newListing) {
            console.log('post button was clicked')
            $http({
                method: 'POST',
                url: '/listings',
                data: newListing       
                }).then(function(response) {
                    console.log('response', response);
                    //self.newListing = response.data;
                    //self.newGame = {};
                    self.getListings();
                    newListing.cost = '',
                    newListing.sqft = '';
                    newListing.city = '';   
                });
            };//end POST function that adds a new for sale property to the listings array

        self.deleteListings = function(deleteListings) {
            console.log('delete listings button was clicked')
            $http({
                method: 'DELETE',
                url: '/listings',
                params: deleteListings       
                }).then(function(response) {  
                    self.getListings();           
                });
            };//end DELETE function that removes a property from the listings collection

}]);