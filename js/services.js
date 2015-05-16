'use strict';

/* Services */

angular.module('music.services', []);

music.factory('audioService', ['$rootScope', '$interval', function ($rootScope, $interval){
    var audio = $('#audio')[0];
    audio.volume = 0.5;

    var factory = {};

    factory.playMusic = function (){
        var check;

        if($rootScope.musicPlay.state){
            audio.pause();
            $rootScope.musicPlay.state = false;

        }else{
            audio.play();
            check = $interval(function(){
                if(audio.ended || !$rootScope.musicPlay.state){
                    $rootScope.musicPlay.state = false;
                    $interval.cancel(check);
                }

                console.log('voice: '+audio.volume*100 +'\n'+'timeEnd: '+audio.ended+'\n'+'playing: '+$rootScope.musicPlay.state);

            }, 500);

            $rootScope.musicPlay.state = true;
        }
    }

    factory.voice = function (number){
        audio.volume = number / 100;
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

    factory.nextSong = function (){
        audio.src = $rootScope.musicPlay.song;
        audio.autoplay=true;
    };

    return factory;

}]);
