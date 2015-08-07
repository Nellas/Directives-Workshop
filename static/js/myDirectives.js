var app = angular.module('directiveWorkshop').directive('pending', function() {
    return {
        restrict: 'AE',
        scope: {
            request: "&"

        },
        template:'<button ng-hide="loading"> Submit </button> <img style="margin-left: 25px;" src="static/images/ajax-loader.gif" ng-show="loading" />',
        link: function(scope, elem) {

            elem.on('click', function () {
                scope.loading = true;
                scope.request()
                    .then(function() {
                        scope.loading = false;
                    })
            });
        }
    };
});