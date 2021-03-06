(function(){
  angular.module('threadApp')
    .factory('userService', userService)
    .factory('clothesService', clothesService)
    .factory('blogService', blogService)

    userService.$inject = ['$http']

    function userService($http){
      var apiUrl = '/api/users/'
      var service = {
        index: index,
        show: show,
        create: create,
        update: update,
        favorites: favorites,
        destroy: destroy
      }
      return service

      // factory functions:
      function index(){
        return $http.get(apiUrl)
      }

      function show(id){
        return $http.get(apiUrl + id)
      }

      function favorites(id){
        console.log("Getting my favorites")
        return
        $http.get(apiUrl + id)
      }

      function create(data){
        return $http.post(apiUrl, data)
      }

      function update(id, data){
        return $http.patch(apiUrl + id, data)
      }

      function destroy(id){
        return $http.delete(apiUrl + id)
      }
    }

    blogService.$inject = ['$http']

    function blogService($http){
      var service = {
        blog: blog
      }

      return service

      function blog(data){
        return $http.post('/api/blog', data)
      }
    }

    clothesService.$inject = ['$http']

    function clothesService($http){
      var service = {
        kicks: kicks,
        shades: shades,
        shirts: shirts
      }

      return service


    function kicks(){
      console.log("Getting all kicks")
      return $http.get('http://api.shopstyle.com/api/v2/products?pid=uid3481-2375059-12&cat=mens-shoes-athletic&offset=0&limit=50')
    }

    function shades(){
      console.log("Getting all shades")
      return $http.get('http://api.shopstyle.com/api/v2/products?pid=uid3481-2375059-12&fts=mens+eyewear&offset=0&limit=50')
    }

    function shirts(){
      console.log("Getting all shirts")
      return $http.get('http://api.shopstyle.com/api/v2/products?pid=uid3481-2375059-12&fts=mens+athletic+shirts&offset=0&limit=50')
    }



  }

})()
