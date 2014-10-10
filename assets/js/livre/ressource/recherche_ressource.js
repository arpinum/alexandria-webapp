//= require ../_module.js

(function (angular) {
    'use strict';
    angular.module("livre")
        .factory("Recherche", ['$http','$q', function ($http, $q) {
            return {
                recherche: function (requete) {
                    return encapsule($q, $http.get("/api/recherche", {params:{q:requete}}));
                }
            };

        }]);

    function encapsule($q, request) {
        var result = $q.defer();
        request.success(result.resolve).error(result.reject);
        return result.promise;
    }
})(angular);