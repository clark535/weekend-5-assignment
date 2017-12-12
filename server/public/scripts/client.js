var app = angular.module('PropertyApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/listings', {
        templateUrl: '/views/listings.html',
        controller: 'ListingsController as vm'
    }).when('/rentals', {
        templateUrl: '/views/rentals.html',
        controller: 'RentalsController as vm'
    }).otherwise({
        redirectTo: '/listings'//change to a redirect
    });
});//routes to the two pages for sale and rental
