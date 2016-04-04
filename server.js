var
  express = require('express')
  , app = express()
  , logger = require('morgan')
  , path = require('path')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , apiRoutes = require('./routes/api.js')
  , jwt = require('jsonwebtoken')
  , config = require('./config.js')

mongoose.connect('mongodb://localhost/threads', function(err){
  if(err) console.log("Error connecting")
  console.log("Connected to mongo db threads")
})

app.set('superSecret', config.secret)

app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req,res){
  res.sendfile(path.join(__dirname, 'public/index.html'))
})

app.use ('/api', apiRoutes)

app.listen(3000, function(){
  console.log("Server spinning on that 3k.")
})
