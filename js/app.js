// Author: Shafley
// Date: 2015.5
// Organizations: HeFei University of Technology


 'use strict';

// Declare app level module which depends on controller,services,directives,and filters.

var app = angular.module('app', [
    'ngRoute',
    'app.filters',
    'app.services',
    'app.directives',
    'app.controllers'
]);

app.config(
    [
        '$routeProvider',
        '$locationProvider',
        function ($routeProvider, $locationProvider) {
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