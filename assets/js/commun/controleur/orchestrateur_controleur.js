//= require ../_module.js

(function (angular) {
    'use strict';

    angular.module('commun')
        .controller('OrchestrateurControleur', ['$scope', '$location', function ($scope, $location) {
            $scope.$location = $location;
            $scope.$on("ExemplaireAjoute", function(){
                $location.path("/index");
            });

        }]);
})(angular);