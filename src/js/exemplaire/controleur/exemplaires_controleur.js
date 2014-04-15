(function (angular) {
    'use strict';

    angular.module('exemplaire')
        .controller('ExemplairesControleur',
        ['$scope', 'Exemplaires', function ($scope, Exemplaires) {
            $scope.ajouterExemplaire = function() {
                Exemplaires.put($scope.exemplaire, null, function() {
                    $scope.$emit("ExemplaireAjoute");
                });
            };
        }]);
})(angular);

