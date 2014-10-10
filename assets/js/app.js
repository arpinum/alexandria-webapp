//= require livre/controleur/livres_controleur.js
//= require exemplaire/controleur/exemplaires_controleur.js
//= require commun/controleur/orchestrateur_controleur.js

(function (angular) {
    'use strict';
    angular.module("app", ['ngResource', 'ui.bootstrap', 'ngRoute', 'livre', 'exemplaire', 'commun'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when("/index", {
                    controller: "LivresControleur",
                    templateUrl: "/templates/index"
                })
                .when("/ajout-exemplaire", {
                    controller: "ExemplairesControleur",
                    templateUrl: "/templates/ajout-exemplaire"
                })
                .otherwise({
                    redirectTo: '/index'
                });
        }]);
})(angular);