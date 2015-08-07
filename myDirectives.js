var app = angular.module('directiveWorkshop').directive('pending', function() {
    return {
        restrict: 'AE',
        scope: {
            request: "&"

        },
        template:'<button ng-hide="loading"> Submit </button> <img style="margin-left: 25px;" src="images/ajax-loader.gif" ng-show="loading" />',
        link: function(scope, elem, attrs) {

            elem.on('click', function () {
                scope.loading = true;
                scope.request()
                    .then(function(data) {
                        console.log(data);
                        return data;
                    }).then(function() {
                        scope.loading = false;
                    })
            });
        }
    }
});