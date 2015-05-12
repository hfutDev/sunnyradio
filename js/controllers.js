'use strict';

/* Controllers */

angular.module('music.controllers', []);

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
            'img': 'album.gif',
            'playNum': '2379',
            'searchNum': '15'
        },

        {
            'id': '01',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'img': 'album.gif',
            'playNum': '2379',
            'searchNum': '15'
        },

        {
            'id': '01',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
            'img': 'album.gif',
            'playNum': '2379',
            'searchNum': '15'
        },

        {
            'id': '01',
            'name': '最炫民族风',
            'songer': '凤凰传奇',
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
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'img': 'search.jpg'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'img': 'search.jpg'
        }
    ];

    $scope.newMusic = [
        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'img': 'search.jpg',
            'number': '365'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'img': 'search.jpg',
            'number': '365'
        },

        {
            'name': '红尘客栈',
            'songer': '周杰伦',
            'img': 'search.jpg',
            'number': '365'
        }
    ];
}]);

music.controller('PlayCtrl', ['$scope', function ($scope){
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
}]);

music.controller('RankCtrl', ['$scope', function {
    $scope.rank = [
        {

        },
    ];
}]);
