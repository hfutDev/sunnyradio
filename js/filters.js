'use strict';

/* Filters */

angular.module('music.filters', []);

music.filter('offset', function () {
    return function (input, start) {
        if (input) {
            start = parseInt(start, 10);
            return input.slice(start);
        } else {
            return [];
        }
    };
});