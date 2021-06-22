var express = require('express');
var router = express.Router();
const loginController = require('../controllers/admin/loginController');
const homeController = require('../controllers/admin/homeController');
const chatController = require('../controllers/admin/chatController');
var auth = require('../middleware/auth');

router.get('/', loginController.index);
router.post('/login', loginController.login);
router.get('/home', auth.isAuthorized, homeController.index);
router.get('/chat', auth.isAuthorized, chatController.index);
router.post('/sendMessage', auth.isAuthorized, chatController.sendMessage);

module.exports = router;