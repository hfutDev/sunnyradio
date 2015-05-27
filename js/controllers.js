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

music.controller('HomeCtrl', ['$scope', 'audioService', function ($scope, audioService){
    $scope.musicList = [
        {
            'id': 1,
            'name': '尚好的青春',
            'songer': '孙燕姿',
            'url': 'songs/Liekkas.mp3',
            'img': 'release.jpg',
            'common': '飞天小沫',
            'desc': '这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂'
        },

        {
            'id': 2,
            'name': '尚好的青春',
            'songer': '孙燕姿',
            'url': 'songs/Liekkas.mp3',
            'img': 'release.jpg',
            'common': '飞天小沫',
            'desc': '这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂'
        },

        {
            'id': 3,
            'name': '尚好的青春',
            'songer': '孙燕姿',
            'url': 'songs/Liekkas.mp3',
            'img': 'release.jpg',
            'common': '飞天小沫',
            'desc': '这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂'
        },

        {
            'id': 4,
            'name': '尚好的青春',
            'songer': '孙燕姿',
            'url': 'songs/Liekkas.mp3',
            'img': 'release.jpg',
            'common': '飞天小沫',
            'desc': '这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂'
        },

        {
            'id': 5,
            'name': '尚好的青春',
            'songer': '孙燕姿',
            'url': 'songs/Liekkas.mp3',
            'img': 'release.jpg',
            'common': '飞天小沫',
            'desc': '这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂'
        },

        {
            'id': 6,
            'name': '尚好的青春',
            'songer': '孙燕姿',
            'url': 'songs/Liekkas.mp3',
            'img': 'release.jpg',
            'common': '飞天小沫',
            'desc': '这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂'
        }
    ];

    $scope.musicRank = [
        {
            'id': '01',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'img': 'album.gif',
            'playNum': '2379',
            'searchNum': '15'
        },

        {
            'id': '02',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'img': 'album.gif',
            'playNum': '2379',
            'searchNum': '15'
        },

        {
            'id': '03',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'img': 'album.gif',
            'playNum': '2379',
            'searchNum': '15'
        },

        {
            'id': '04',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'img': 'album.gif',
            'playNum': '2379',
            'searchNum': '15'
        }
    ];

    $scope.playMusic = function (){
        audioService.playMusic();
    }

}]);

music.controller('TalkCtrl', ['$scope', function ($scope){
    $scope.musicEmotion = [
        {
            'id': '01',
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '02',
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '03',
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '04',
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '05',
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '06',
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '07',
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '08',
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'id': '09',
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        }
    ];

    $scope.newMusic = [
        {
            'id': '01',
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg',
            'number': '365'
        },

        {
            'id': '02',
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg',
            'number': '365'
        },

        {
            'id': '03',
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg',
            'number': '365'
        }
    ];
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

music.controller('RankCtrl', ['$scope', 'audioService', function ($scope, audioService){
    $scope.categoryRank = [
        {
            'id': '01',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'playTimes': '4562',
            'searchTimes': '15',
            'category': 'hfut'
        },

        {
            'id': '02',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'playTimes': '4562',
            'searchTimes': '15',
            'category': 'hfut'
        },

        {
            'id': '03',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'playTimes': '4562',
            'searchTimes': '15',
            'category': 'hfut'
        },

        {
            'id': '04',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'playTimes': '4562',
            'searchTimes': '15',
            'category': 'hfut'
        },

        {
            'id': '05',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'playTimes': '4562',
            'searchTimes': '15',
            'category': 'hfut'
        },

        {
            'id': '06',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'playTimes': '4562',
            'searchTimes': '15',
            'category': 'hfut'
        },

        {
            'id': '07',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'playTimes': '4562',
            'searchTimes': '15',
            'category': 'hfut'
        },

        {
            'id': '08',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'playTimes': '4562',
            'searchTimes': '15',
            'category': 'hfut'
        },

        {
            'id': '09',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'playTimes': '4562',
            'searchTimes': '15',
            'category': 'hfut'
        },

        {
            'id': '10',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'playTimes': '4562',
            'searchTimes': '15',
            'category': 'hfut'
        }
    ];

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
