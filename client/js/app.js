angular
.module('beaconandeggs', ['ui.router', 'lbServices'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
  $stateProvider
  .state('promotions', {
    url: '/',
    templateUrl: 'views/promotions.html',
    controller: 'PromotionController'
  });
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({ enabled: true, requireBase: false });
}]);
