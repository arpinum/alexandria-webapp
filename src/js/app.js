(function (angular) {
    'use strict';
    angular.module("app", ['ngResource', 'ngRoute', 'configuration', 'livre', 'exemplaire', 'commun'])
        .config(['$httpProvider', '$routeProvider', function ($httpProvider, $routeProvider) {
            console.log($routeProvider);
            $routeProvider
                .when("/index", {
                    controller: "LivresControleur",
                    templateUrl: "/templates/index.html"
                })
                .when("/ajout-exemplaire", {
                    controller: "ExemplairesControleur",
                    templateUrl: "/templates/ajout-exemplaire.html"
                })
                .otherwise({
                    redirectTo: '/index'
                });
            $httpProvider.interceptors.push('IntercepteurConfiguration');
        }])
        .factory('IntercepteurConfiguration', ['$q', '$rootScope', 'configuration', function ($q, $rootScope, configuration) {
            return {
                'request': function (config) {
                    if (config.url.indexOf("/templates") != -1) {
                        return config || $q.when(config);
                    }
                    config.url = configuration.urlApi + config.url;
                    return config || $q.when(config);
                }
            };
        }]);
})(angular);