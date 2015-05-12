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
