'use strict';

/* Controllers */

angular.module('music.controllers', []);

music.controller('MusicCtrl', ['$scope', '$rootScope', '$interval', 'audioService', function ($scope, $rootScope, $interval, audioService){
    $rootScope.musicPlay = {
        'id': '01',
        'state': false,
        'img': 'search.jpg',
        'url': 'songs/July.mp3',
        play: function (music){
            console.log(music);
            //this.id = music.id;
            //this.img = music.img;
            $rootScope.musicPlay.url = music.url;
            // audioService.nextSong();
            audioService.playMusic();
        }
    };
}]);

music.controller('HomeCtrl', ['$scope', function ($scope){
    $scope.musicList = [
        {
            'name': '尚好的青春',
            'songer': '孙燕姿',
            'img': 'release.jpg',
            'common': '飞天小沫',
            'desc': '这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂'
        },

        {
            'name': '尚好的青春',
            'songer': '孙燕姿',
            'img': 'release.jpg',
            'common': '飞天小沫',
            'desc': '这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂'
        },

        {
            'name': '尚好的青春',
            'songer': '孙燕姿',
            'img': 'release.jpg',
            'common': '飞天小沫',
            'desc': '这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂'
        },

        {
            'name': '尚好的青春',
            'songer': '孙燕姿',
            'img': 'release.jpg',
            'common': '飞天小沫',
            'desc': '这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂'
        },

        {
            'name': '尚好的青春',
            'songer': '孙燕姿',
            'img': 'release.jpg',
            'common': '飞天小沫',
            'desc': '这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂这首歌献给需要被安慰的灵魂'
        },

        {
            'name': '尚好的青春',
            'songer': '孙燕姿',
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
            'id': '01',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'img': 'album.gif',
            'playNum': '2379',
            'searchNum': '15'
        },

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
            'id': '01',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'url': 'songs/Nice.mp3',
            'img': 'album.gif',
            'playNum': '2379',
            'searchNum': '15'
        }
    ];

}]);

music.controller('TalkCtrl', ['$scope', function ($scope){
    $scope.musicEmotion = [
        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        }
    ];

    $scope.newMusic = [
        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg',
            'number': '365'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg',
            'number': '365'
        },

        {
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
        $rootScope.musicPlay.url = 'songs/Nice.mp3';
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

music.controller('RankCtrl', ['$scope', function ($scope){
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
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer':'周杰伦',
            'url': 'songs/Nice.mp3',
            'img': 'search.jpg'
        }
    ];
}]);
