describe("Une première spec", function () {

    var $scope, controller;

    beforeEach(function () {
        angular.mock.module('app');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
    }));

    it("is defined", function () {
        expect(true).toBeTruthy();
    });
});