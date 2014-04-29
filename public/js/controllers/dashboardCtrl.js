define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('dashboardController', function($scope, $location, Authenticate, Flash) {

    if (!sessionStorage.authenticated){
              $location.path('/');
              Flash.show("you should be authenticated to access this page");
        }

    $scope.logout = function (){
      Authenticate.get({},function(response){
          delete sessionStorage.authenticated;
          Flash.show(response.flash);
          $location.path('/');
      });
    };

  });
});
