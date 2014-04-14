(function (angular) {
    'use strict';
    angular.module("livre")
        .factory("Livres", ['$resource', function ($resource) {
            return $resource("/livres", {}, {
                get: {method: 'GET', isArray: true}
            });
        }]);
})(angular);