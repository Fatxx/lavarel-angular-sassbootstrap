define(['./app'], function (app) {
    'use strict';

    return app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: "/home",
            views: {
                "header": {
                  templateUrl: 'templates/navbar.html',
                  controller: 'navbarController'
                },
                "body": {
                  templateUrl: 'views/home.html',
                  controller: 'homeController'
                }
            }
          })
          .state('admin', {
            url: "/admin",
            views: {
                "header": {
                },
                "body": {
                  templateUrl: 'views/login.html',
                  controller: 'loginController'
                }
            }
          })
          .state('dashboard', {
            url: "/dashboard",
            views: {
                "header": {
                },
                "body": {
                  templateUrl: 'views/dashboard.html',
                  controller: 'dashboardController'
                }
            }
          })
          .state('empresa', {
            url: "/empresa",
            views: {
                "header": {
                  templateUrl: 'templates/navbar.html',
                  controller: 'navbarController'
                },
                "body": {
                  template: "<div> TESTE </div>"
                }
            }
          });

          $urlRouterProvider.otherwise('/');

          $locationProvider.html5Mode(true);

      }).config(function($httpProvider){

          var interceptor = function($rootScope, $location, $q, Flash){

          var success = function(response){
              return response;
          };

          var error = function(response){
              if (response.status == 401){
                  delete sessionStorage.authenticated;
                  $location.path('/admin');
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
