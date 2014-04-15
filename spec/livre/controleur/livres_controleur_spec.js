describe("LivresControleur", function () {
    'use strict';

    var $scope, controller, livres,
        collectionDeLivres = [];

    beforeEach(function () {
        angular.mock.module('livre');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        livres = jasmine.createSpyObj("ressource", ['get']);
        livres.get.andReturn(collectionDeLivres);
        controller = $controller('LivresControleur', {
            $scope: $scope,
            Livres:livres
        });
    }));

    it("is defined", function () {
        expect(controller).toBeDefined();
    });

    it("demandes les livres à l'api", function () {
        expect(livres.get).toHaveBeenCalled();
    });

    it("passes les livres à la vue", function () {
        expect($scope.livres).toEqual(collectionDeLivres);
    });

    it("après ajout d'un exemplaire, la vue se rafraichit", function(){
        $scope.$emit("PropagationExemplaireAjoute");

        expect(livres.get.callCount).toBe(2);
    });
});