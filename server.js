var
  express = require('express')
  , app = express()
  , logger = require('morgan')
  , path = require('path')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , apiRoutes = require('./routes/api.js')
  , jwt = require('jsonwebtoken')
  , dotenv = require('dotenv').load({silent: true})
  , config = require('./config.js')

  // ENVIRONMENT PORT
  var port = process.env.PORT || 3000

  // DATABASE
// var dbURL = 'mongodb://' + process.env.MLAB_USERNAME + ':' + process.env.MLAB_PASSWORD + '@ds019950.mlab.com:19950/threads'
var dbURL = 'mongodb://localhost/threads-v2'


mongoose.connect(dbURL, function(err){
  if(err) console.log("Error connecting")
  console.log("Connected to: ", dbURL)
})

app.set('superSecret', process.env.secret)

app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req,res){
  res.sendfile(path.join(__dirname, 'public/index.html'))
})

app.use ('/api', apiRoutes)

app.listen(port, function(){
  console.log("Server spinning on ", port)
})
