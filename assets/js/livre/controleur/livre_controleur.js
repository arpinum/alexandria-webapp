//= require ../_module.js
//= require ../ressource/livre_ressource.js


(function (angular) {
    'use strict';

    function LivreControleur($scope, $routeParams, Livre) {
        $scope.livre = Livre.get({isbn:$routeParams.isbn});
    }

    angular.module('livre')
        .controller('LivreControleur', ['$scope', '$routeParams','Livre', LivreControleur]);
})(angular);