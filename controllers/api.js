var
	User = require('../models/User.js'),
  Product = require('../models/Product.js'),
	jwt = require('jsonwebtoken')

module.exports = {

	// list all users
	index: function(req,res){
		User.find({}, function(err, users){
			if(err) return console.log(err)
			res.json(users)
		})
	},

	// create new user
	create: function(req,res){
		var newUser = new User(req.body)
		newUser.password = newUser.generateHash(req.body.password)
		newUser.save(function(err, user){
			if(err) return console.log(err)
			res.json({success: true, message: "User created!", user: user})
		})


		/*User.create(req.body, function(err, user){
			if(err) return console.log(err)
			res.json({success: true, message: "User created!", user: user})
		})*/
	},

	// show specific user
	show: function(req,res){
		User.findOne({_id: req.params.id}, 'email name favorites', function(err, user){
			if(err) return console.log(err)
			res.json(user)
		}).populate('favorites')
	},

	// show: function(req,res){
	// 	User
	// 		.findOne({_id: req.params.id}, 'email name favorites')
	// 		.populate('favorites')
	// 		.exec(function(err, user){
	// 			if(err) console.log(err)
	// 			console.log(user.favorites[0])
	// 		})
	//
	// },

	// update a user
	update: function(req,res){
		User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, user){
			if(err) return console.log(err)
			res.json({success: true, message: "User updated!", user: user})
		})
	},

	// delete a user
	delete: function(req,res){
		User.findOneAndRemove({_id: req.params.id}, function(err){
			if(err) return console.log(err)
			res.json({success: true, message: "User Deleted!"})
		})
	},

	products: function(req,res){
		Product.find({}, function(err, users){
			if(err) return console.log(err)
			res.json(users)
		})
	},

	// delete a favorite
	unfavorite: function(req,res){
		Product.findOneAndRemove({_id: req.params.id}, function(err){
			if(err) return console.log(err)
			res.json({success: true, message: "Favorite Deleted!"})
		})
	},


  fav: function(req, res){
    // User.findOne({email: req.body.email})
    console.log(req.body.email)
    Product.create(req.body, function(err, product){
      if(err) console.log(err)
      console.log(product._id)
      res.json({message: "You favorited a shoe.", product: product})

			User.findOneAndUpdate(
				{email: req.body.email},
				{$push: {"favorites": product._id}},
				{upsert:true, new: true},
					function(err, user){
        		if(err) console.log(err)

						// res.json({message: "saved.", user:user})
				})

    })

  },

	authenticate: function(req,res){
		User.findOne({email: req.body.email}, function(err, user){
			if(err) return console.log(err)
			if(!user) return res.json({success: false, message: "No User Found."})
			if(user && !user.validPassword(req.body.password)) {
				return res.json({success: false, message: "Wrong password!"})
			}
			var token = jwt.sign(user.toObject(), process.env.secret, {
				expiresInMinutes: 1440
			})
			res.json({success: true, message: "Boom! Token!", token: token, user: user})
		})
	},

	protect: function(req, res, next){
		var token = req.body.token || req.query.token || req.headers['x-access-token']

		if(token){
			jwt.verify(token, process.env.secret, function(err, decoded){
				if(err) return res.json({success: false, message: "Failed to verify token."})
				req.decoded = decoded
				console.log(decoded)
				next()
			})
		} else{
			return res.status(403).json({
				success: false,
				message: "No token provided."
			})
		}
	}

}
