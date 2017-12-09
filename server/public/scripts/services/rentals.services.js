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
         }

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
                })
            };
        
        self.deleteRentals = function(deleteRentals) {
            console.log('delete button was clicked')
            $http({
                method: 'DELETE',
                url: '/rentals',
                params: deleteRentals       
                }).then(function(response) {  
                    self.getRentals();
                        
                })
            };
            
}]);