var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user-controller')
var ItemController = require('../controllers/item-controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', UserController.register)
router.post('/request_token', UserController.request_token)
router.post('/items', ItemController.createItem)
router.get('/items', ItemController.findItem)

module.exports = router;
