//= require ../_module.js
//= require ../ressource/livres_ressource.js

(function (angular) {
    'use strict';

    angular.module('livre')
        .controller('LivresControleur', ['$scope', 'Livres', function ($scope, Livres) {
            $scope.livres = Livres.get();

            $scope.chargeLaSuite = function() {
              $scope.livres.push({_id:"test", titre:"toto", nombre:3});
            };

            $scope.supprimerEntree = function () {
              $scope.livres.pop();
            };

            $scope.$on("PropagationExemplaireAjoute", function() {
                $scope.livres = Livres.get();
            });
        }]);
})(angular);