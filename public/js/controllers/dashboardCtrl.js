// public/js/controllers/NerdCtrl.js
var app = angular.module('dashboardCtrl', []);
app.controller('dashboardController', function($scope, $cookies, $location, $http, userService) {
    $scope.git = {};

    if ($cookies.get('username')) {
        $scope.username = $cookies.get('username');
        $scope.email = $cookies.get('email');
        $scope.image = $cookies.get('image');
        $scope.username = "poorvi10";
        $http.get("https://api.github.com/users/"+$scope.username)
            .then(function(data) {
                console.log(data);
                $scope.userData = data.data;

            $http.get($scope.userData.repos_url)
                .then(function(data){
                    $scope.selected = undefined;
                    $scope.reops = data.data;
                    console.log($scope.reops);
                    $scope.tempArr = [];
                    angular.forEach($scope.reops, function(value,key){
                        var obj = {
                            name: value.name,
                            url: value.url
                        }
                        $scope.tempArr.push(obj);
                    });
                    var req = {
                        method: 'POST',
                        url: 'https://api.github.com/repos/poorvi10/angular-notes/issues',
                        headers: {
                            'Authorization': 'token xxx'
                        },
                        data: {
                            "title": "Found a bug",
                            "body": "I'm having a problem with this."
                        }
                    }
                    // $http(req).then(function(data){
                    //     console.log(data);
                    // });
            });
        });

        

    } else {
        $location.path('/404');
    }

    $scope.logout = function() {
        $cookies.remove('username');
        $location.path('/login');
    }

    $scope.getIssues = function() {
        userService.createIssue($scope.git);
        console.log($scope.git);
    }
});
    