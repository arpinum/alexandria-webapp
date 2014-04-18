(function (angular) {
    'use strict';

    angular.module('commun')
        .controller('OrchestrateurControleur', ['$scope', function ($scope) {
            $scope.$on("ExemplaireAjoute", function(){
               $scope.$broadcast("PropagationExemplaireAjoute");
            });

        }]);
})(angular);