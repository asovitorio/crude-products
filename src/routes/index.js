var express = require('express');
const userController = require('../api/controllers/userController')
var router = express.Router();
/* GET home page. */

require('dotenv').config()
router.get('/', userController.index);

router.post('/', userController.create);

module.exports = router;