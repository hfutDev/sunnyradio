'use strict';

/* Services */

angular.module('music.services', []);

music.factory('audioService', ['$rootScope', '$interval', function ($rootScope, $interval){
    var audio = $('#audio')[0];
    audio.volume = 0.5;
    $rootScope.musicPlay.end = audio.ended;

    var factory = {};

    factory.playMusic = function (){
        if($rootScope.musicPlay.state){
            $rootScope.musicPlay.state = false;
            audio.pause();
        }else{
            $rootScope.musicPlay.state = true;
            audio.play();
            var check = $interval(function(){
                if(audio.ended){
                    $rootScope.musicPlay.state = false;
                }
                console.log(audio.ended);
            }, 500);
            console.log(check);
        }
    }

    // factory.play = function (){
    //     audio.play();
    // };

    // factory.pause = function (){
    //     audio.pause();
    // };

    factory.voice = function (number){
        audio.volume = number / 100;
        console.log(number);
    };

    var voiceNum = 0;
    factory.silent = function (sound){
        if(sound){
            sound = false;
            voiceNum = audio.volume;
            audio.volume = 0;
        }else{
            audio.volume = voiceNum;
            sound = true;
        }
        return sound;
    };

    factory.nextSong = function (url){
        audio.src = $rootScope.musicPlay.song;
    };

    return factory;

}]);


// (function ($) {
//     "use strict";
//     var audio = $('#audio')[0];
//     // audio.play();

// }(jQuery));