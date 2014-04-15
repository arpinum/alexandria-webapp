(function (angular) {
    'use strict';
    angular.module("exemplaire")
        .factory("Exemplaires", ['$resource', function ($resource) {
            return $resource("/lecteurs/:email/exemplaires/:isbn", {}, {
                put: {method: 'PUT'}
            });
        }]);
})(angular);