//= require ../_module.js

(function (angular) {
    'use strict';
    angular.module("emprunt")
        .factory("Emprunts", ['$resource', function ($resource) {
            return $resource("/api/emprunts", {}, {
                ajoute: {method: 'POST'}
            });
        }]);
})(angular);