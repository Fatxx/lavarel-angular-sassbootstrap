define(['./module'], function (directives) {
  'use strict';

  directives.directive('navbar', function() {
        return {
          restrict: "E",
          templateUrl: "templates/navbar.html"
        };
  });

});
