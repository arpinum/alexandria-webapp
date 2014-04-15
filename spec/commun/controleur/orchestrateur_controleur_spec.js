describe("OrchestrateurControleur", function () {
    'use strict';

    var $scope, controller;

    beforeEach(function () {
        angular.mock.module('commun');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        controller = $controller('OrchestrateurControleur', {
            $scope: $scope
        });
    }));

    it("is defined", function () {
        expect(controller).toBeDefined();
    });

    it("quand un évènement AjoutExemplaire est émis, le contrôleur le propage", function () {
        spyOn($scope, "$broadcast");

        $scope.$emit("ExemplaireAjoute");

        expect($scope.$broadcast).toHaveBeenCalledWith("PropagationExemplaireAjoute");
        expect($scope.$broadcast.callCount).toBe(1);
    });

    it("peut tester d'une autre manière", function () {
        var propage = false;
        $scope.$on("PropagationExemplaireAjoute", function () {
            propage = true;
        });

        $scope.$emit("ExemplaireAjoute");

        expect(propage).toBeTruthy();
    });
});