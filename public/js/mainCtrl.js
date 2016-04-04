(function(){
  angular.module('threadApp')
    .controller('MainController', MainController)

    MainController.$inject = ['userService', '$state']

    function MainController(userService, $state){
      var vm = this
      vm.title = 'Main Controller'
      vm.newUser = {}

      userService.index().success(function(results){
        vm.users = results
      })

      vm.create = function(){
        userService.create(vm.newUser).success(function(response){
          console.log(response)
          $state.go('detail', {id: response.user._id})
        })
      }

      vm.destroy = function(id, index){
        userService.destroy(id).success(function(response){
          vm.users.splice(index, 1)
        })
      }
    }

})()
