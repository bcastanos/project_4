var
  mongoose = require('mongoose')
  , Schema = mongoose.Schema

var blogSchema = new Schema({
    title: String,
    body: String,
    imgUrl: String
})

var Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
