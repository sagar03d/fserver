var express = require('express');
var router = express.Router();
const userController = require('../controllers/mainController');

/* GET home page. */
router.get('/', userController.index);
router.get('/about', userController.about);

module.exports = router;
