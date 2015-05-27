'use strict';

/* Directives */

angular.module('music.directives', []);

music.directive('uploadFiles', function (){
    return {
        restrict: 'A',
        link:function (scope, ele, attrs){
            var input = ele[0];
            input.onchange = function (){
                console.log(input.files[0]);
                scope.hehe = true;
                scope.$apply();
            }
        }
    }
});