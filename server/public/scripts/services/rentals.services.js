app.service('RentalsService', ['$http', function($http){
    var self = this;

    self.rentals = {list: [] };
    
   

        self.getRentals = function() {
    
            $http({
             method: 'GET',
             url: '/rentals'         
             }).then(function(response) {
                 console.log('response', response);
                 self.rentals.list = response.data;//this fills up the companies array with the table from the database.
         });
         };//end function that trigger GET for rental array 

         self.addNewRental = function(newRental) {
            console.log('post button was clicked')
            $http({
                method: 'POST',
                url: '/rentals',
                data: newRental       
                }).then(function(response) {
                    console.log('response', response);
                    self.getRentals();
                    newRental.rent = '',
                    newRental.sqft = '';
                    newRental.city = '';   
                });
            };//end POST function that adds new rental property to rental array
        
        self.deleteRentals = function(deleteRentals) {
            console.log('delete button was clicked')
            $http({
                method: 'DELETE',
                url: '/rentals',
                params: deleteRentals       
                }).then(function(response) {  
                    self.getRentals();
                        
                });
            };//end DELETE function that removes a rental listing from the database
            
}]);