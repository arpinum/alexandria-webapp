//= require ../_module.js

(function (angular) {
    'use strict';
    angular.module("exemplaire")
        .factory("Exemplaires", ['$resource', function ($resource) {
            return $resource("/api/lecteurs/:email/exemplaires/:isbn", {}, {
                ajoute: {method: 'PUT'}
            });
        }]);
})(angular);