describe("ExemplaireControleur", function () {
    'use strict';

    var $scope, controller, exemplaires, recherche;

    beforeEach(function () {
        angular.mock.module('exemplaire');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        exemplaires = jasmine.createSpyObj("ressource", ['ajoute']);
        recherche = jasmine.createSpyObj("recherche", ['recherche']);

        controller = $controller('ExemplairesControleur', {
            $scope: $scope,
            Exemplaires: exemplaires,
            Recherche: recherche
        });
    }));

    it("doit pouvoir sélectionner un isbn", function () {
        $scope.selectionne("test");

        expect($scope.exemplaire.isbn).toBe("test");
    });

    it("doit pouvoir creer un exemplaire", function () {
        var exemplaire = {
            isbn: "isbn",
            email: "email"
        };

        $scope.ajouterExemplaire(exemplaire);

        expect(exemplaires.ajoute).toHaveBeenCalledWith({ isbn: "isbn", email: "email"}, null, jasmine.any(Function));
    });

    it("doit emettre un evenement lors de l'ajout d'un exemplaire", function () {
        exemplaires.ajoute.andCallFake(function (params, body, callback) {
            callback();
        });
        var exemplaire = {
            isbn: "isbn",
            email: "email"
        };
        var emis = false;
        $scope.$on("ExemplaireAjoute", function () {
            emis = true;
        });

        $scope.ajouterExemplaire(exemplaire);

        expect(emis).toBeTruthy();
    });

    it("doit pouvoir faire une recherche", inject(function ($q) {
        var livres = [];
        var rechercheDeferred = $q.defer();
        rechercheDeferred.resolve(livres);
        recherche.recherche.andReturn(rechercheDeferred.promise);

        var result = $scope.recherche("test");

        expect(recherche.recherche).toHaveBeenCalledWith("test");
        $scope.$digest();
        expect(result).toBeDefined();
    }));

});