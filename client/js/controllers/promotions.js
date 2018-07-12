angular
.module('beaconandeggs')
.controller('PromotionController', ['$scope', '$location', 'Promotion', function($scope, $location, Promotion) {
  Promotion.getAllPromotions({storeId: $location.search().storeId}).$promise.then(function(results) {
    $scope.result = results;
  });
}]);