(function (angular) {
    'use strict';
    angular.module("livre")
        .factory("Recherche", ['$resource', function ($resource) {
            return $resource("/recherche", {}, {
                recherche: {method: 'GET', isArray: false}
            });
        }]);
})(angular);