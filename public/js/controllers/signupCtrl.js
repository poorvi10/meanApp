// public/js/controllers/MainCtrl.js
angular.module('signupCtrl', []).controller('signupController', function($scope, userService) {
    $scope.user = {};

    $scope.register = function() {
        $scope.dataLoading = true;
        userService.create($scope.user);
        console.log($scope.user);
    }
});