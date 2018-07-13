angular
.module('beaconandeggs')
.controller('CameraController', ['$scope', '$stateParams', function($scope, $stateParams) {
  console.log($stateParams);
  $scope.channel = {
    // the fields below are all optional
    // videoHeight: 800,
    // videoWidth: 600,
    video: null // Will reference the video element on success
  };
}]);