var app = angular.module('PropertyApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/listings.html',
        controller: 'ListingsController as vm'
    }).when('/rentals', {
        templateUrl: '/views/rentals.html',
        controller: 'RentalsController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
