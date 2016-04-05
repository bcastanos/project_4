(function(){
  angular.module('threadApp')
    .factory('userService', userService)
    .factory('clothesService', clothesService)

    userService.$inject = ['$http']

    function userService($http){
      var apiUrl = '/api/users/'
      var service = {
        index: index,
        show: show,
        create: create,
        update: update,
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

    clothesService.$inject = ['$http']

    function clothesService($http){
      var service = {
        index: index
      }

      return service


    function index(){
      console.log("Getting all clothes")
      return $http.get('http://api.shopstyle.com/api/v2/products?pid=uid3481-2375059-12&cat=mens-shoes-athletic&offset=0&limit=50')
    }
  }

})()
