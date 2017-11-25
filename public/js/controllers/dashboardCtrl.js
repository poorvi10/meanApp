// public/js/controllers/NerdCtrl.js
var app = angular.module('dashboardCtrl', []);
app.controller('dashboardController', function($scope, $cookies, $location) {

    if ($cookies.get('username')) {
        $scope.username = $cookies.get('username');
        $scope.email = $cookies.get('email');
        $scope.image = $cookies.get('image');
    } else {
        $location.path('/404');
    }

    $scope.logout = function() {
        $cookies.remove('username');
        $location.path('/login');
    }
});
    