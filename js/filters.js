'use strict';

/* Filters */

angular.module('music.filters', []);

music.filter('offset', function () {
    return function (input, start) {
        // console.log("input: "+input);
        // console.log("start: "+start);
        if (input) {
            start = parseInt(start, 10);
            return input.slice(start);
        } else {
            return [];
        }
    };
});