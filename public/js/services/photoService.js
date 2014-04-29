define(['./module'], function (services) {

    services.factory('dataPhoto', function($resource) {
    return $resource(
            "/api/photo/:id",
            {},
            {
                "update": {method: "PUT"}
            });
    });

});
