describe("OrchestrateurControleur", function () {
    'use strict';

    var $scope, controller, location;

    beforeEach(function () {
        angular.mock.module('commun');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        location = jasmine.createSpyObj("location", ["path"]);
        controller = $controller('OrchestrateurControleur', {
            $scope: $scope,
            $location : location
        });
    }));

    it("is defined", function () {
        expect(controller).toBeDefined();
    });

    it("quand un évènement AjoutExemplaire est émis, le contrôleur retourne à l'index", function () {
        spyOn($scope, "$broadcast");

        $scope.$emit("ExemplaireAjoute");

        expect(location.path).toHaveBeenCalledWith("/index");
    });
});