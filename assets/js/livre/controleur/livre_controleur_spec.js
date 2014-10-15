describe("LivreControleur", function () {
    'use strict';

    var $scope, controller, Livre, Emprunts, Emprunt;

    beforeEach(function () {
        angular.mock.module('livre');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        Livre = jasmine.createSpyObj("livre", ["get"]);
        Livre.get.andReturn([]);
        Emprunts = jasmine.createSpyObj("emprunts", ["ajoute"]);
        Emprunt = jasmine.createSpyObj("emprunt", ["rend"]);
        demarreControleur($controller);
    }));

    it("is defined", function () {
        expect(controller).toBeDefined();
    });

    it("passe le livre à la vue", function () {
        expect($scope.livre).toEqual([]);
    });


    it("peut sélectionner un exemplaire pour emprunt", function () {
        var exemplaire = {};
        $scope.selectionne(exemplaire);

        expect($scope.exemplaireSelectionne).toEqual(exemplaire);
    });

    it("initialise l'emprunt sur sélection exemplaire", function () {
        var exemplaire = {idBibliotheque: "id"};
        $scope.livre = {isbn: "isbn"};

        $scope.selectionne(exemplaire);

        expect($scope.emprunt).toBeDefined();
        expect($scope.emprunt.isbn).toEqual("isbn");
        expect($scope.emprunt.identifiantBibliotheque).toEqual("id");
    });

    it("peut demander à créer l'emprunt", inject(function () {
        $scope.emprunte({});

        expect(Emprunts.ajoute).toHaveBeenCalledWith({}, jasmine.any(Function));
    }));

    it("peut demander à rendre un exemplaire", function () {
        var emprunt = {};
        $scope.rend(emprunt);

        expect(Emprunt.rend).toHaveBeenCalledWith(emprunt, {}, jasmine.any(Function));

    });

    function demarreControleur($controller) {
        controller = $controller('LivreControleur', {
            $scope: $scope,
            $routeParams: {isbn: "test"},
            Livre: Livre,
            Emprunts: Emprunts,
            Emprunt:Emprunt
        });
    }
});