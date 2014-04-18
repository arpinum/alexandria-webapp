(function (angular) {
    'use strict';

    angular.module('exemplaire')
        .controller('ExemplairesControleur',
        ['$scope', 'Exemplaires', 'Recherche', function ($scope, Exemplaires, Recherche) {

            $scope.exemplaire = {};
            $scope.recherche = function () {
                Recherche.recherche({q:encodeURIComponent($scope.titre)}, function (data) {
                    $scope.livres = data.livres;
                });
            };

            $scope.ajouterExemplaire = function () {
                Exemplaires.put($scope.exemplaire, null, function () {
                    $scope.$emit("ExemplaireAjoute");
                });
            };

            $scope.selectionne = function (isbn) {
                $scope.exemplaire.isbn = isbn;
            }
        }]);
})(angular);

