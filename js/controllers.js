'use strict';

/* Controllers */

angular.module('music.controllers', []);

music.controller('MusicCtrl', ['$scope', '$rootScope', '$interval', '$location', 'audioService',   function ($scope, $rootScope, $interval, $location, audioService){
    $rootScope.musicPlay = {
        'state': false,
        'music':{
            'id': '03',
            'img': 'search.jpg',
            'url': 'songs/Liekkas.mp3'
        },
        play: function (music){
            this.music = music;
            audioService.playMusic();
        },
        //音乐列表中的播放按钮调用
        nextPlay:function(music){
            audioService.nextPlay(music);
        }
    };

    $scope.search = function(){
        $location.path('/search');
    }

    $scope.categorys = [
        {
            cate:'小清新兆赫'
        },
        {
            cate:'流行粤语兆赫'
        },
        {
            cate:'流行日语兆赫'
        }
    ];

}]);

music.controller('UploadCtrl', ['$scope', function ($scope){
    $scope.music = {};
    $scope.upload = function (music){
        $scope.music.category = $scope.music.category.cate;
        console.log(music);
        // console.log($scope.musicUpload);
    }

    $scope.change = function (element){
        var file = element.files[0];
        var pos = file.name.lastIndexOf(".");
        console.log(file.name);
        //用$apply更新$scope
        $scope.$apply(function(){
            $scope.music.name = file.name;
            $scope.music.type = file.name.substring(pos + 1);
        });
    }
}]);

music.controller('HomeCtrl', ['$scope', 'audioService', 'homeService', function ($scope, audioService, homeService){

    homeService.getMusicList().then(function (data){
        $scope.musicList = data;
    });

    homeService.getRankFour().then(function (data){
        $scope.musicRank = data;
    });

    $scope.playMusic = function (){
        audioService.playMusic();
    }

}]);

music.controller('TalkCtrl', ['$scope', 'talkService', function ($scope, talkService){

    talkService.getLastMood().then(function (data){
        $scope.lastMood = data;
        console.log(data);
    });

    talkService.lastMusic().then(function (data){
        $scope.lastMusic = data;
        console.log(data);
    });
}]);

music.controller('PlayCtrl', ['$scope', '$rootScope', 'audioService', function ($scope, $rootScope, audioService){

    $scope.channel = [
        {
            'name': '儿歌兆赫',
            'count': '6789'
        },

        {
            'name': '小清新兆赫',
            'count': '6789'
        },

        {
            'name': '经典怀旧兆赫',
            'count': '6789'
        },

        {
            'name': '流行华语兆赫',
            'count': '6789'
        },

        {
            'name': '欧美兆赫',
            'total': '6789'
        },

        {
            'name': '电影原声兆赫',
            'count': '6789'
        },

        {
            'name': '流行粤语兆赫',
            'count': '6789'
        },

        {
            'name': '流行日语兆赫',
            'count': '6789'
        },

        {
            'name': '流行韩语兆赫',
            'count': '6789'
        }
    ];

    $scope.playMusic = function (){
        audioService.playMusic();
    };

    $scope.nextSong = function (){
        $rootScope.musicPlay.music.url = 'songs/Nice.mp3';
        // $rootScope.musicPlay.img = music.img;
        audioService.nextSong();
    };

    $scope.voice = function (number){
        audioService.voice(number);
    };

    $scope.sound = true;
    $scope.silent = function (){
        $scope.sound = audioService.silent($scope.sound);
    };

}]);

music.controller('RankCtrl', ['$scope', 'audioService', 'rankService', '$interval', function ($scope, audioService, rankService, $interval){

    var categoryRankList = [];
    $scope.getRank = function (){
        for(var i=0; i<5; i++){
            !(function (i){
                rankService.getRankList(i).then(function (data){
                    categoryRankList.push(data);
                    if(i==0){
                        $scope.cateRankOne = categoryRankList[i];
                    }else if(i==2){
                        $scope.cateRankTwo = categoryRankList[i];
                    }
                });
            })(i);
        }
    }
    $scope.getRank();

    $scope.category = [1,2,3,4,5];
    $scope.cateListOne = 1;
    $scope.cateListTwo = 3;
    $scope.getCategory = function (num){
        if(num<=2){
            $scope.cateListOne = num;
        }else{
            $scope.cateListTwo = num;
        }
        switch(num){
            case 1: $scope.cateRankOne = categoryRankList[0];break;
            case 2: $scope.cateRankOne = categoryRankList[1];break;
            case 3: $scope.cateRankTwo = categoryRankList[2];break;
            case 4: $scope.cateRankTwo = categoryRankList[3];break;
            case 5: $scope.cateRankTwo = categoryRankList[4];break;
            default: return;
        }
    }

}]);

music.controller('SearchCtrl', ['$scope', function ($scope){
    $scope.musicResult = [
        {
            'id': '01',
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '02',
            'name': '龙卷风',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '03',
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '04',
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '05',
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '06',
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '07',
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '08',
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        }
    ];
}]);
