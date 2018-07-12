angular
.module('beaconandeggs')
.controller('PromotionController', ['$scope', '$stateParams', 'Promotion', function($scope, $stateParams, Promotion) {
  Promotion.getAllPromotions({storeId: $stateParams.storeId}).$promise.then(function(results) {
    $scope.result = results;
  })
}]);