angular
.module('beacon-and-eggs')
.controller('PromotionController', ['$rootScope', '$scope', '$stateParams', 'Promotion', function($rootScope, $scope, $stateParams, Promotion) {
  $rootScope.storeId = $stateParams.storeId;
  Promotion.getAllPromotions({storeId: $stateParams.storeId}).$promise.then(function(results) {
    $scope.result = results;
  });
}]);