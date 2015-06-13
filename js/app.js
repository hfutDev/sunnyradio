// Author: Shafley
// Date: 2015.5
// Organizations: HeFei University of Technology


 'use strict';

// Declare app level module which depends on controller,services,directives,and filters.

var music = angular.module('music', [
    'ngRoute',
    'music.controllers',
    'music.services',
    'pagination.directives',
    'pagination.filters'
]);

music.run(['$rootScope', function ($rootScope){
    $rootScope.apiHost = 'http://localhost/sunnyradio/api/';
    // $rootScope.apiHost = 'http://sunnyradio.hfutonline.net/new/';

}]);

music.config(
    [
        '$routeProvider',
        '$locationProvider',
        '$httpProvider',
        function ($routeProvider, $locationProvider, $httpProvider) {
            // $httpProvider.defaults.headers.common["Access-Control-Allow-Origin"]= "/*";
            // console.log($httpProvider);

            $routeProvider
                .when('/', {
                    templateUrl: 'tpl/home.html'
                })
                .when('/play', {
                    templateUrl: 'tpl/play.html'
                })
                .when('/rank', {
                    templateUrl: 'tpl/rank.html'
                })
                .when('/search', {
                    templateUrl: 'tpl/search.html'
                })
                .when('/talk', {
                    templateUrl: 'tpl/talk.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
            $locationProvider.html5Mode(false).hashPrefix('!');
        }
    ]
);