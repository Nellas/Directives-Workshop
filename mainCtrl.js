var app = angular.module('directiveWorkshop', []);

app.controller('mainCtrl', function($scope, mainService){

    $scope.getData = function () {
        return mainService.getData($scope.query);
    };
});