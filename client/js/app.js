angular
.module('beaconandeggs', ['ui.router', 'lbServices', 'webcam'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
  $stateProvider
  .state('promotions', {
    url: '/',
    templateUrl: 'views/promotions.html',
    controller: 'PromotionController'
  })
  .state('camera', {
    url: '/augmented-reality',
    templateUrl: 'views/camera.html',
    controller: 'CameraController'
  });
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({ enabled: true, requireBase: false });
}]);
