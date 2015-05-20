'use strict';

/* Services */

angular.module('music.services', []);

music.factory('audioService', ['$rootScope', '$interval', function ($rootScope, $interval){
    var audio = $('#audio')[0];
    audio.volume = 0.5;

    var factory = {};

    function endCheck(){
        var audioSrc = audio.src;
        var check = $interval(function(){
            // 播放结束 || 点击暂停 || 下一首
            if(audio.ended || !$rootScope.musicPlay.state) {
                $rootScope.musicPlay.state = false;
                $interval.cancel(check);
            }
            console.log('voice: '+audio.volume*100 +'\n'+'timeEnd: '+audio.ended+'\n'+'playing: '+$rootScope.musicPlay.state);
        }, 500);
    }

    factory.playMusic = function (){

        if($rootScope.musicPlay.state){
            audio.pause();
            audio.autoplay=false;
            $rootScope.musicPlay.state = false;
        }else{
            audio.src = $rootScope.musicPlay.url;
            audio.autoplay=true;
            audio.play();
            endCheck();
            $rootScope.musicPlay.state = true;
        }
    };

    factory.nextSong = function (){
        audio.src = $rootScope.musicPlay.url;
        audio.autoplay=true;
        $rootScope.musicPlay.state = true;
        endCheck();
    };

    factory.nextPlay = function (id){
        if(id != $rootScope.musicPlay.id){
            console.log(factory.nextSong);
        }
    };

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

    return factory;

}]);
