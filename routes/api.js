var
  express = require('express')
  , apiRouter = express.Router()
  , apiCtrl = require('../controllers/api.js')

apiRouter.post('/authenticate', apiCtrl.authenticate)

apiRouter.route('/users')
  .get(apiCtrl.index)
  .post(apiCtrl.create)

apiRouter.route('/fav')
  .get(apiCtrl.products)
  .post(apiCtrl.fav)

apiRouter.route('/fav/:id')
  .delete(apiCtrl.unfavorite)

  apiRouter.route('/blog')
    .post(apiCtrl.blog)

apiRouter.use(apiCtrl.protect)

apiRouter.route('/users/:id')
  .get(apiCtrl.show)
  .patch(apiCtrl.update)
  .delete(apiCtrl.delete)






module.exports = apiRouter
