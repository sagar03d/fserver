var express = require('express');
var router = express.Router();
const loginController = require('../controllers/admin/loginController');
const homeController = require('../controllers/admin/homeController');
var auth = require('../middleware/auth');

router.get('/', loginController.index);
router.post('/login', loginController.login);
router.get('/home', auth.isAuthorized, homeController.index);

module.exports = router;