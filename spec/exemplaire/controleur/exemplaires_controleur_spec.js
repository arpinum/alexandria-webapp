describe("ExemplaireControleur", function () {
    'use strict';

    var $scope, controller, exemplaires;

    beforeEach(function () {
        angular.mock.module('exemplaire');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        exemplaires = jasmine.createSpyObj("ressource", ['put']);

        controller = $controller('ExemplairesControleur', {
            $scope: $scope,
            Exemplaires: exemplaires
        });
    }));

    it("doit pouvoir creer un exemplaire", function () {
        $scope.exemplaire = {
            isbn: "isbn",
            email: "email"
        };

        $scope.ajouterExemplaire();

        expect(exemplaires.put).toHaveBeenCalledWith({ isbn: "isbn", email: "email"}, null, jasmine.any(Function));
    });

    it("doit emettre un evenement lors de l'ajout d'un exemplaire", function() {
        exemplaires.put.andCallFake(function(params, body, callback) {
            callback();
        });
        $scope.exemplaire = {
            isbn: "isbn",
            email: "email"
        };
        var emis = false;
        $scope.$on("ExemplaireAjoute", function() {
             emis = true;
        });

        $scope.ajouterExemplaire();

        expect(emis).toBeTruthy();
    });

});