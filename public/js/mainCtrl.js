(function(){
  angular.module('threadApp')
    .controller('MainController', MainController)

    MainController.$inject = ['userService', 'clothesService', '$state']

    function MainController(userService, clothesService, $state){
      var vm = this
      vm.title = 'Main Controller'
      vm.newUser = {}

      userService.index().success(function(results){
        vm.users = results
      })

      clothesService.kicks().success(function(results){
        console.log(results)
        vm.allKicks = results.products
      })

      clothesService.shades().success(function(results){
        console.log(results)
        vm.allShades = results.products
      })

      clothesService.shirts().success(function(results){
        console.log(results)
        vm.allShirts = results.products
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
