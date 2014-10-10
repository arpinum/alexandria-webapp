//= require ../_module.js
//= require ../ressource/exemplaires_ressource.js
//= require livre/ressource/recherche_ressource.js

(function (angular) {
    'use strict';

    angular.module('exemplaire')
        .controller('ExemplairesControleur',
        ['$scope', 'Exemplaires', 'Recherche', function ($scope, Exemplaires, Recherche) {
            $scope.exemplaire = {};
            $scope.recherche = function (chaine) {
                return Recherche.recherche(encodeURIComponent(chaine)).then(function (data) {
                    return data.livres;
                });
            };

            $scope.ajouterExemplaire = function (exemplaire) {
                Exemplaires.ajoute(exemplaire, null, function () {
                    $scope.$emit("ExemplaireAjoute");
                });
            };

            $scope.selectionne = function (isbn) {
                $scope.exemplaire.isbn = isbn;
            };
        }]);
})(angular);

