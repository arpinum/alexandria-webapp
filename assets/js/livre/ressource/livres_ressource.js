//= require ../_module.js

(function (angular) {
    'use strict';
    angular.module("livre")
        .factory("Livres", ['$resource', function ($resource) {
            return $resource("/api/livres", {}, {
                get: {method: 'GET', isArray: true}
            });
        }]);
})(angular);