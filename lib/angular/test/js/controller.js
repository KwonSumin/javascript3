
var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope,service){
    $scope.sum = service.test;
    $scope.getList = service.getList($scope.currentPage);
    $scope.page = [1,2,3,4,5,6,7,8,9,10];
    $scope.next = function(){
        $scope.page = [11,12,13,14,15,16,17,18,19,20];
    };
});