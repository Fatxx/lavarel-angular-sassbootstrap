define(['./module'], function (services) {

    services
      .factory('Authenticate', function($resource) {
          return $resource("/service/authenticate/");
      })
      .factory('Flash', function($rootScope){
           return {
               show: function(message){
                   $rootScope.flash = message;
               },
               clear: function(){
                   $rootScope.flash = "";
               }
           };
       });
});
