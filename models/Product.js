var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var productSchema = new Schema({
  imgUrl: String,
  clickUrl: String,
  brandedName: String,
  price: Number,
  description: String
})

var Product = mongoose.model('Product', productSchema)

module.exports = Product
