 'use strict';

// Declare app level module which depends on filters, and services
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
                    templateUrl: 'tpl/blog_list.html'
                })
                .when('/:slug', {
                    templateUrl: 'tpl/blog_detail.html'
                })
                .when('/tag/:tag', {
                    templateUrl: 'tpl/blog_list.html'
                })
                .when('/author/:author', {
                    templateUrl: 'tpl/blog_list.html'
                })
                .when('/category/:category', {
                    templateUrl: 'tpl/blog_list.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
            $locationProvider.html5Mode(false).hashPrefix('!');
        }
    ]
);