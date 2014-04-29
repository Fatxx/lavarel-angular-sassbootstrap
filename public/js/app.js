define([
    'angular',
    'angular-route',
    'angular-sanitize',
    'angular-resource',
    'lodash',
    'bootstrap-js',
    'angular-ui-router',
    './controllers/index',
    './directives/index',
    // './filters/index',
    './services/index'
  ], function (angular) {
      'use strict';

        return angular.module('app', [
            'app.controllers',
            'app.directives',
            // 'app.filters',
            'app.services',
            'ui.router',
            'ngRoute',
            'ngSanitize',
            'ngResource'
        ]).constant("CSRF_TOKEN", '<?php echo csrf_token(); ?>');
  });
