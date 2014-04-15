(function (angular) {
    'use strict';
    angular.module("app", ['ngResource', 'configuration', 'livre', 'exemplaire', 'commun'])
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push('IntercepteurConfiguration');
        }])
        .factory('IntercepteurConfiguration', ['$q', '$rootScope', 'configuration', function ($q, $rootScope, configuration) {
            return {
                'request': function (config) {
                    config.url = configuration.urlApi + config.url;
                    return config || $q.when(config);
                }
            };
        }]);
})(angular);