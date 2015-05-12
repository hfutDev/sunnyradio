'use strict';

/* Controllers */

angular.module('app.controllers', [])

    .controller('HomeCtrl', ['$scope', function ($scope){
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

    }])

;