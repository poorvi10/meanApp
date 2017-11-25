// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
        $routeProvider

            // home page
            .when('/', {
                templateUrl: 'views/signup.html',
                controller: 'signupController'
            })
    
            // nerds page that will use the NerdController
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'loginController'
            });
    
        $locationProvider.html5Mode(true);
    
    }]);
    