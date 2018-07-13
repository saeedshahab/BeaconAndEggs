angular
.module('beacon-and-eggs', ['ui.router', 'lbServices', 'webcam'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
  $stateProvider
  .state('promotions', {
    url: '/?storeId',
    templateUrl: '/views/promotions.html',
    controller: 'PromotionController'
  })
  .state('layout', {
    url: '/layout?storeId',
    templateUrl: '/views/layout.html',
    controller: 'LayoutController'
  })
  .state('camera', {
    url: '/augment?storeId',
    templateUrl: '/views/camera.html',
    controller: 'CameraController'
  });
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({ enabled: true, requireBase: false });
}]);
