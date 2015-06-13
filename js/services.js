'use strict';

/* Services */

angular.module('music.services', []);

music.factory('audioService', ['$rootScope', '$interval', function ($rootScope, $interval){
    var audio = $('#audio')[0];
    audio.volume = 0.5;

    var service = {};

    //这个地方不用$watch是因为不会写Orz,,,
    //当定时器完成任务后注销掉
    function endCheck(){
        var audioSrc = audio.src;
        var check = $interval(function(){
            // 播放结束 || 点击暂停
            if(audio.ended || !$rootScope.musicPlay.state) {
                $rootScope.musicPlay.state = false;
                $interval.cancel(check);
            }
            console.log('voice: '+audio.volume*100 +'\n'+'timeEnd: '+audio.ended+'\n'+'playing: '+$rootScope.musicPlay.state);
        }, 500);
    }

    //音乐控制面板的播放
    service.playMusic = function (){

        if($rootScope.musicPlay.state){
            // audio.autoplay=false;
            audio.pause();
            $rootScope.musicPlay.state = false;
        }else{
            // audio.autoplay=true;
            audio.play();
            endCheck();
            $rootScope.musicPlay.state = true;
        }
    };

    //音乐控制面板的下一首
    service.nextSong = function (){
        audio.src = $rootScope.musicPlay.music.url;
        audio.autoplay=true;
        $rootScope.musicPlay.state = true;
        endCheck();
    };

    service.nextPlay = function (music){
        if(music.id != $rootScope.musicPlay.music.id){
            $rootScope.musicPlay.music = music;
            service.nextSong();
        }else{
            service.playMusic();
        }
    };

    service.voice = function (number){
        audio.volume = number / 100;
    };

    var voiceNum = 0;
    service.silent = function (sound){
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

    return service;
}]);

music.factory('homeService', ['$rootScope', '$http', function ($rootScope, $http){

    var service = {};

    service.getMusicList = function (){
        var url = $rootScope.apiHost + '/musicmood';
        return $http.get(url).then(function (resp){
            return resp.data;
        });
    };

    service.getRankFour = function (){
        var url = $rootScope.apiHost + '/rankfour';
        return $http.get(url).then(function (resp){
            return resp.data;
        });
    };

    return service;
}]);

music.factory('rankService', ['$rootScope', '$http', function ($rootScope, $http){
    var service = {};
    // var file = ['fybtype.php', 'fybtype.php?type=1', 'fybtype.php', 'fybtype.php?type=2', 'fybtype.php?type=3'];
    var file = [0, 'bg', 1, 2, 3];
    service.getRankList = function (index){
        var url = $rootScope.apiHost +"fyb/" + file[index];
        // console.log(url);
        return $http.get(url).then(function (resp){
            // console.log(resp.data);
            return resp.data;
        });
    };

    return service;
}]);

music.factory('talkService', ['$rootScope', '$http', function ($rootScope, $http){

    var service = {};

    service.getLastMood = function (){
        var url = $rootScope.apiHost + 'lastmood';
        return $http.get(url).then(function (resp){
            console.log(resp.data);
            return resp.data;
        });
    };

    service.lastMusic = function (){
        var url = $rootScope.apiHost + 'lastmusic';
        return $http.get(url).then(function (resp){
            console.log(resp.data);
            return resp.data;
        });
    };

    return service;
}]);

music.factory('searchService', ['$rootScope', '$http', function ($rootScope, $http){
    var url = $rootScope.apiHost + '/api/v1/searchlist';
    var service = {};

    service.getTalkList = function (){
        return $http.get(url).then(function (resp){
            return resp.data;
        });
    };

    return service;
}]);
