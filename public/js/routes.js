define(['./app'], function (app) {
    'use strict';
    return app.config(function ($routeProvider) {
        $routeProvider
          .when('/', {
              templateUrl: 'views/home.html',
              controller: 'homeController'
          })

          .when('/admin', {
              templateUrl: 'views/login.html',
              controller: 'loginController'
          })

          .when('/dashboard', {
              templateUrl: 'views/dashboard.html',
              controller: 'dashboardController'
          })
          .otherwise({
              redirectTo: '/'
          });
      }).config(function($httpProvider){

          var interceptor = function($rootScope, $location, $q, Flash){

          var success = function(response){
              return response;
          };

          var error = function(response){
              if (response.status == 401){
                  delete sessionStorage.authenticated;
                  $location.path('/');
                  Flash.show(response.data.flash);

              }
              return $q.reject(response);

          };

              return function(promise){
                  return promise.then(success, error);
              };
          };
          $httpProvider.responseInterceptors.push(interceptor);
      }).run(function($http,CSRF_TOKEN){
          $http.defaults.headers.common['csrf_token'] = CSRF_TOKEN;
      });
    });
