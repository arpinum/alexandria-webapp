describe("LivreControleur", function () {
    'use strict';

    var $scope, controller, Livre;

    beforeEach(function () {
        angular.mock.module('livre');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        Livre = jasmine.createSpyObj("livre", ["get"]);
        Livre.get.andReturn([]);
        demarreControleur($controller);
    }));

    it("is defined", function () {
        expect(controller).toBeDefined();
    });

    it("passe le livre à la vue", function () {
        expect($scope.livre).toEqual([]);
    });

    function demarreControleur($controller) {
        controller = $controller('LivreControleur', {
            $scope: $scope,
            $routeParams: {isbn:"test"},
            Livre: Livre
        });
    }
});