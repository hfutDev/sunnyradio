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
        replace: true,
        template: '\
            <div>\
                <span ng-click="prevPage()">上一页</span>\
                <span ng-click="nextPage()">下一页</span>\
            </div>',
        link:function (scope, element, attrs){
            // console.log(scope);
            // console.log(attrs);
            // attrs.list = scope.$eval(attrs.list);
            // console.log("attrs.list: "+attrs.list.length);
            // console.log("attrs.itemsPerPage: "+attrs.itemsPerPage);
            scope.pageCount = function () {
                if (attrs.list) {
                    return Math.ceil(attrs.list.length / attrs.itemsPerPage);
                } else {
                    return 1;
                }
            };
            scope.prevPage = function () {
                if (attrs.currentPage > 0) {
                    attrs.currentPage--;
                    scope.currentPage = attrs.currentPage;
                    console.log("上一页"+attrs.currentPage);
                }
                console.log("scope.currentPage："+scope.currentPage);
                console.log("scope.itemsPerPage；"+scope.itemsPerPage);
            };
            scope.nextPage = function () {
                if (attrs.currentPage < scope.pageCount()) {
                    attrs.currentPage++;
                    scope.currentPage = attrs.currentPage;
                    console.log("下一页"+attrs.currentPage);
                }
                console.log("scope.currentPage："+scope.currentPage);
                console.log("scope.itemsPerPage；"+scope.itemsPerPage);
            };
            scope.currentPage = attrs.currentPage;
            scope.itemsPerPage = attrs.itemsPerPage;
        }
    }
});