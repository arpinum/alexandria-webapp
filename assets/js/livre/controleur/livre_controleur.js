//= require ../_module.js
//= require ../ressource/livre_ressource.js
//= require emprunt/ressource/emprunts_ressource.js
//= require emprunt/ressource/emprunt_ressource.js


(function (angular) {
    'use strict';

    function LivreControleur($scope, $routeParams, Livre, Emprunts, Emprunt) {
        $scope.livre = Livre.get({isbn: $routeParams.isbn});

        $scope.emprunte = function (emprunt) {
            console.log(emprunt);
            Emprunts.ajoute(emprunt, function () {
                $scope.exemplaireSelectionne.disponible = false;
            });
        };

        $scope.rend = function (emprunt) {
          Emprunt.rend(emprunt, {}, function () {
              $scope.exemplaireSelectionne.disponible = true;
          });
        };

        $scope.selectionne = function (exemplaire) {
            $scope.exemplaireSelectionne = exemplaire;
            $scope.emprunt = {
                identifiantBibliotheque: exemplaire.idBibliotheque,
                isbn: $scope.livre.isbn
            };
        };
    }

    angular.module('livre')
        .controller('LivreControleur', ['$scope', '$routeParams', 'Livre', 'Emprunts', 'Emprunt', LivreControleur]);
})(angular);