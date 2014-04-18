(function (angular) {
    'use strict';

    angular.module('livre')
        .directive("axlivre", [function () {
            return {
                restrict: 'E',
                scope: {
                    bouquin: "=livre",
                    surSelection: "&surSelection"
                },
                template: '<a class="list-group-item"><img src="{{bouquin.image}}")/><span>{{bouquin.titre}}</span></a>',
                link: function ($scope, element, attrs) {

                    element.on("click", function () {
                        $(element).closest(".list-group").find("a").removeClass("active");
                        $("a", element).addClass("active");
                        $scope.$eval(function () {
                            $scope.surSelection({isbn: $scope.bouquin.isbn});
                        });
                    });
                }
            };
        }]);
})(angular);