require.config({

    paths: {
        'domReady': '../lib/requirejs-domready/domReady',
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular-route/angular-route',
        'angular-resource': '../lib/angular-resource/angular-resource',
        'angular-sanitize': '../lib/angular-sanitize/angular-sanitize',
        'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router',
        'lodash': '../lib/lodash/dist/lodash',
        'bootstrap-js': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap'
    },

    shim: {
        'angular': {
          exports: 'angular'
        },
        'angular-route': {
          deps: ['angular']
        },
        'angular-resource': {
          deps: ['angular']
        },
        'angular-sanitize': {
          deps: ['angular']
        },
        'angular-ui-router': {
          deps: ['angular']
        }
    },

    deps: ['./bootstrap']
});
