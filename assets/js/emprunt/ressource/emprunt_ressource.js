//= require ../_module.js

(function (angular) {
    'use strict';
    angular.module("emprunt")
        .factory("Emprunt", ['$resource', function ($resource) {
            return $resource("/api/emprunts/:identifiantBibliotheque;:isbn", {}, {
                rend: {method: 'PUT'}
            });
        }]);
})(angular);