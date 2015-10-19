var utahVotes = angular.module('utahVotes', ['ui.router']);

utahVotes.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home')

    $stateProvider

    // Home state

        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })

        .state('about', {
            // we'll get to this in a bit       
        });

});