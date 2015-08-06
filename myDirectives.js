var app = angular.module('directiveWorkshop').directive('pending', function() {
    return {
        restrict: 'A',
        scope: {
            request: '&'

        },
        link: function(scope, elem, attrs) {
            //elem.on('click', function () {
            //    elem.css({display: 'None'});
            //
            //})
        }
    }
});