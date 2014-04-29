define(['./module'], function (controllers) {

    controllers.controller('loginController', function($scope, $sanitize, $location, Authenticate, Flash) {

    if (sessionStorage.authenticated){
        $location.path('/dashboard');
        Flash.show("");
      }

    $scope.login = function () {
      Authenticate.save({
        'email': $sanitize($scope.email),
        'password': $sanitize($scope.password)
      }, function () {
        Flash.clear();
        sessionStorage.authenticated = true;
        $location.path('/dashboard');
      }, function (response) {
        $scope.flash = response.data.flash;
      });
    };

  });

});
