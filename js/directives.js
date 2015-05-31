'use strict';

/* Directives */

angular.module('music.directives', []);

// music.directive('uploadFiles', function (){
//     return {
//         restrict: 'A',
//         link:function (scope, element, attrs){
//             element.bind('change', function(){
//                 scope.$apply();
//             });
//         }
//     }
// });

music.directive('pagination', function (){
    return {
        restrict: 'AE',
        link:function (){

        }
    }
});