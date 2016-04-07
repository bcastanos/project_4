(function(){
  angular.module('threadApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/')

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'partials/home.html'
        })
        .state('mens-shoes-athletic', {
          url: '/mens-shoes-athletic',
          templateUrl: 'partials/mens-shoes-athletic.html',
          controller: 'MainController as main'
        })
        .state('mens-eyewear', {
          url: '/mens-eyewear',
          templateUrl: 'partials/mens-eyewear.html',
          controller: 'MainController as main'
        })
        .state('mens-shirts', {
          url: '/mens-shirts',
          templateUrl: 'partials/mens-shirts.html',
          controller: 'MainController as main'
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
        .state('login', {
          url: '/login',
          templateUrl: 'partials/login.html'
        })

    })

})()
