angular
.module('beaconandeggs')
.controller('CameraController', ['$scope', function($scope) {
  $scope.channel = {
    // the fields below are all optional
    // videoHeight: 800,
    // videoWidth: 600,
    video: null // Will reference the video element on success
  };
}]);