var express = require('express');
const userController = require('../api/controllers/userController')
const authController = require('../api/controllers/authController')
const customersController = require('../api/controllers/customersController')
const authMiddleware = require('../api/middleware/authMiddleware')
var router = express.Router();

// ######## ROUTES C.R.U.D.E. USER #########
router.get('/user', userController.index);
router.get('/user/:id', userController.showId);
router.get('/search/user', userController.showParams);
router.post('/user', userController.create);
router.put('/user', userController.update);
router.delete('/user', userController.delete);

// ######## ROUTES AUTH  #########
router.post('/auth', authController.auth);


// ######## ROUTES C.R.U.D.E. CUSTOMERS  #########
router.get('/customers',customersController.index)


module.exports = router;