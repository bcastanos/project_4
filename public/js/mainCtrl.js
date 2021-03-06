(function(){
  angular.module('threadApp')
    .controller('MainController', MainController)

    MainController.$inject = ['userService', 'clothesService', 'blogService', '$state', '$http']

    function MainController(userService, clothesService, blogService, $state, $http){
      var vm = this
      vm.title = 'Main Controller'
      vm.newUser = {}
      vm.newBlog = {}

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

      vm.favorite = function(shoe){
        var selected = {
          imgUrl: shoe.image.sizes.Best.url,
          clickUrl: shoe.clickUrl,
          brandedName: shoe.brandedName,
          price: shoe.price,
          description: shoe.description,
          email: localStorage.email
        }
        $http({
          method : "post",
          url: "/api/fav",
          data: selected
        }).then(function(res){
          console.log(res)
        })

      }

      vm.create = function(){
        userService.create(vm.newUser).success(function(response){
          console.log(response)
          $state.go('login')
        })
      }

      vm.blog = function(){
        blogService.create(vm.newBlog).success(function(response){
          console.log(response)
          $state.go('home')
        })
      }

      vm.destroy = function(id, index){
        userService.destroy(id).success(function(response){
          vm.users.splice(index, 1)
        })
      }


    }

})()
