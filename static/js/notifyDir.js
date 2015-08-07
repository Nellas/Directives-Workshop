var app = angular.module('directiveWorkshop').directive('pending', function() {
    return {

        restrict: 'AE',
        scope: {
            title: '=',
            notifyObj: {body: '=', icon: '='}
        },
        link: function(scope, elem, attr) {
            var Notification = window.Notification || window.mozNotification || window.webkitNotification;
            Notification.requestPermission(function (permission) {
                elem.on('click', function() {
                    return new Notification(scope.title, scope.notifyObj);



                })
            });
        }
    }
});