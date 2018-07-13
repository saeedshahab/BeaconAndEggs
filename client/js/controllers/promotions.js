angular
.module('beaconandeggs')
.controller('PromotionController', ['$rootScope', '$scope', '$location', '$stateParams', 'Promotion', function($rootScope, $scope, $location, $stateParams, Promotion) {
  console.log($stateParams);
  $rootScope.storeId = $stateParams.storeId; // $location.search().storeId;
  Promotion.getAllPromotions({storeId: $stateParams.storeId}).$promise.then(function(results) {
    $scope.result = results;
  });
}]);