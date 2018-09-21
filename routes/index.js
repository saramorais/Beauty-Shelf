var express = require('express');
var router = express.Router();
const userController = require('../controllers').user;
const productController = require('../controllers').product;

const session = require("express-session");

/* USER LOGIN/AUTH */
router.use(session({
  secret: 'toopsecret',
  resave: false,
  saveUninitialized: true
}));

const restrictAccess = function(req, res, next) {
  const sessionId = parseInt(req.session.currentUser);
  const reqId = parseInt(req.params.id);
  sessionId === reqId ? next() : res.status(401).send({err: 401, msg: 'User not loged in. Please login.'});
};

const authenticate = function(req, res, next) {
  req.session.currentUser ? next() : res.status(400).send({err: 400, msg: 'User not loged in. Please login.'});
};
/* USER LOGIN/AUTH */


/* GET backend admin home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/admin', function(req, res, next) {
  res.render('index', { title: 'Add Products' });
});

router.post('/api/user/login', userController.login);
router.delete('/api/user/logout', userController.logout);

router.get('/api/user', userController.list);
router.get('/api/user/:id', userController.getById);
router.post('/api/user', userController.add);
router.put('/api/user/:id', authenticate, restrictAccess, userController.update);
router.delete('/api/user/:id', userController.delete);

router.get('/api/usersSearch/:term', userController.usersSearch);

router.post('/api/user/add_product', userController.addProduct);

router.get('/api/product', productController.list);
router.get('/api/product/:id', productController.getById);
router.post('/api/product', productController.add);
// router.put('/api/product/:id', productController.update);
router.delete('/api/product/:id', productController.delete);

router.get('/api/productSearch/:term', productController.productSearch);

module.exports = router;
