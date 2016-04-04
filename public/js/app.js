(function(){
  angular.module('threadApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/')

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'partials/home.html'
        })
        .state('users', {
          url: '/users',
          templateUrl: 'partials/users.html',
          controller: 'MainController as main'
        })
        .state('signup', {
          url: '/users/new',
          templateUrl: 'partials/signup.html',
          controller: 'MainController as main'
        })
        .state('detail', {
          url: '/users/:id',
          templateUrl: 'partials/detail.html',
          controller: 'DetailController as detail'
        })

    })

})()
