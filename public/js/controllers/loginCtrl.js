// public/js/controllers/NerdCtrl.js
var app = angular.module('loginCtrl', []);
app.controller('loginController', function($scope, $cookies, $location) {
        
        $scope.facebook = {
            username: "",
            email: "",
            fb_image: ''
        }

        $scope.onFBLogin = function() {
            FB.login(function(response) {
                console.log(response);
                if(response.authResponse) {
                    FB.api('/me', 'GET', {fields: 'email, first_name, name, id, picture'}, function(response){
                        $scope.$apply(function() {
                            $cookies.put('username', response.name);
                            $cookies.put('email', response.email);
                            $cookies.put('image', response.picture.data.url);
                            $location.path('/dashboard');
                            $scope.facebook.username = response.name;
                            $scope.facebook.email = response.email;
                            $scope.facebook.fb_image = response.picture.data.url;
                        });
                    })
                } else {
                    //error
                }
            }, {
                scope:'email, user_likes', 
                return_scopes: true
            });
        }
    
    });
    