angular
.module('beacon-and-eggs')
.controller('LayoutController', ['$scope', '$stateParams', 'Store', function($scope, $stateParams, Store) {
  Store.findById({id: $stateParams.storeId}).$promise.then(function(results) {
    $scope.store = results;
  });
}]);