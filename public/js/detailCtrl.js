(function(){
  angular.module('threadApp')
    .controller('DetailController', DetailController)

    DetailController.$inject = ['userService', '$stateParams']

  function DetailController(userService, $stateParams){
    var vm = this
    vm.title = "Detail Controller"

    userService.show($stateParams.id).success(function(results){
      vm.user = results
    })

    vm.edit = function(){
      vm.editing = true
      vm.editingUser = {
        name: vm.user.name,
        email: vm.user.email
      }
    }

    vm.update = function(){
      userService.update($stateParams.id, vm.editingUser).success(function(response){
        vm.editing = false
        vm.user = response.user
      })
    }
  }

})()
