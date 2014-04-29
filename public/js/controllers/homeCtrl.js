define(['./module'], function (controllers) {

  controllers.controller('homeController', function($scope, dataPhoto) {

          $scope.photos = dataPhoto.query();

  });

});
