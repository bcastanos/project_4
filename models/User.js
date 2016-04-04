var
  mongoose = require('mongoose')
  , Schema = mongoose.Schema

var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    email_pref: Boolean,
    favorites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
})

var User = mongoose.model('User', userSchema)

module.exports = User
