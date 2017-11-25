// public/js/app.js
angular.module('sampleApp', ['ngRoute', 'appRoutes', 'loginCtrl', 'signupCtrl', 'userService']);

window.fbAsyncInit = function() {
    FB.init({
      appId            : '129939131036951',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.11',
      status           : true
    });


    FB.getLoginStatus(function(response) {
        if (response.status ==='connected') {
            console.log("logged in");
        } else if (response.status ==='not_authorized') {
            console.log("not auth");
        } else {
            console.log("not authkkkkkkkkk");
        }
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));