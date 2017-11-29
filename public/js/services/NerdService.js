// public/js/services/NerdService.js
angular.module('userService', []).factory('userService', ['$http', function($http) {
    
        return {
            // call to get all nerds
            get : function() {
                return $http.get('/api/nerds');
            },
    
                    // these will work when more API routes are defined on the Node side of things
            // call to POST and create a new nerd
            create : function(userData) {
                return $http.post('/register', userData)
                    .then(function(data) {
                        console.log(data);
                    })
                    .catch(function(data) {
                        console.log(data);
                    });
            },
    
            // call to DELETE a nerd
            delete : function(id) {
                return $http.delete('/api/nerds/' + id);
            },

            createIssue: function(data) {
                return $http.post('/createIssue', data).
                 then(function(data) {
                    console.log(data);
                 })
                 .catch(function(data) {
                    console.log(data);
                 });
            }
        }       
    
    }]);
    
    