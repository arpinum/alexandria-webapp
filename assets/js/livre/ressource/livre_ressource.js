//= require ../_module.js

(function (angular) {
    'use strict';
    angular.module("livre")
        .factory("Livre", ['$resource', function ($resource) {
            return $resource("/api/livres/:isbn", {}, {
                get: {method: 'GET', isArray: false}
            });
        }]);
})(angular);