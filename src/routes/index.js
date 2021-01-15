var express = require('express');
const userController = require('../controllers/userController')
var router = express.Router();
/* GET home page. */

require('dotenv').config()
router.get('/', userController.index);

router.post('/', userController.create);

module.exports = router;