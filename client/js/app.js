angular
.module('beaconandeggs', ['ui.router', 'lbServices'])
.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  $stateProvider
  .state('promotions', {
    url: '/?storeId',
    templateUrl: 'views/promotions.html',
    controller: 'PromotionController'
  });
  $urlRouterProvider.otherwise('/');
}]);
