'use strict';

/* Filters */

angular.module('pagination.filters', []);

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