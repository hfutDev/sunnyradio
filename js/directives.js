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
                <span ng-click="prevPage()" ng-hide="prevPageDisabled">上一页</span>\
                <span ng-click="nextPage()" ng-hide="nextPageDisabled">下一页</span>\
            </div>',
        link:function (scope, element, attrs){
            // console.log(scope);
            // console.log(attrs);
            attrs.list = scope.$eval(attrs.list);
            console.log("attrs.list: "+attrs.list.length);
            console.log("attrs.itemsPerPage: "+attrs.itemsPerPage);

            scope.currentPage = attrs.currentPage;
            scope.itemsPerPage = attrs.itemsPerPage;

            scope.pageCount = function () {
                if (attrs.list) {
                    return Math.ceil(attrs.list.length / scope.itemsPerPage);
                } else {
                    return 1;
                }
            };
            console.log(scope.pageCount());

            scope.prevPage = function () {
                if (scope.currentPage > 0) {
                    scope.currentPage--;
                    console.log("上一页"+scope.currentPage);
                }
                console.log("scope.prevPageDisabled: "+scope.prevPageDisabled);
                console.log("scope.currentPage："+scope.currentPage);
                console.log("scope.itemsPerPage；"+scope.itemsPerPage);
            };

            scope.prevPageDisabled = (scope.currentPage +1 == 1) ? true : false;
            // scope.prevPageDisabled = function () {
            //     console.log("scope.currentPage: "+scope.currentPage);
            //     return scope.currentPage +1 === 1;
            // };
            // scope.prevPageDisabled();

            scope.nextPage = function () {
                if (scope.currentPage < scope.pageCount()) {
                    scope.currentPage++;
                    console.log("下一页"+scope.currentPage);
                }
                console.log("scope.nextPageDisabled: "+scope.nextPageDisabled);
                console.log("scope.currentPage："+scope.currentPage);
                console.log("scope.itemsPerPage；"+scope.itemsPerPage);
            };

            scope.nextPageDisabled = (scope.currentPage +1 == scope.pageCount()) ? true : false;
            // scope.nextPageDisabled = function () {
            //     console.log("scope.currentPage: "+scope.currentPage);
            //     return scope.currentPage +1 === scope.pageCount();
            // };
            // scope.nextPageDisabled();

            console.log(scope);
        }
    }
});