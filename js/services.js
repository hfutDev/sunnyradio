'use strict';

/* Services */

angular.module('music.services', []);

music.factory('audioService', ['$rootScope', function ($rootScope){
    var audio = $('#audio')[0];

    var factory = {};

    factory.play = function (){
        audio.play();
    };

    factory.pause = function (){
        audio.pause();
    };

    factory.voice = function (number){
        audio.volume = number / 100;
        console.log(number);
    }

    factory.nextSong = function (url){
        audio.src = url;
    }

    return factory;

}]);


// (function ($) {
//     "use strict";
//     var audio = $('#audio')[0];
//     // audio.play();

// }(jQuery));