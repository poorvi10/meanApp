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
            })

            // nerds page that will use the NerdController
            .when('/404', {
                templateUrl: 'views/404.html'
            })
            
            // nerds page that will use the NerdController
            .when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'dashboardController'
            });
    
        $locationProvider.html5Mode(true);
    
    }]);
    