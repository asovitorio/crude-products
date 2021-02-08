var express = require('express');
const userController = require('../api/controllers/userController')
const authController = require('../api/controllers/authController')
const customersController = require('../api/controllers/customersController')
const authMiddleware = require('../api/middleware/authMiddleware')
const configController = require('../api/controllers/configControllers')
var router = express.Router();

// ######## ROUTES C.R.U.D. USER #########
router.get('/user',authMiddleware.auth, userController.index);
router.get('/user/:id',authMiddleware.auth, userController.showId);
router.get('/search/user',authMiddleware.auth, userController.showParams);
router.post('/user',authMiddleware.auth, userController.create);
router.put('/user', userController.update);
router.delete('/user/:id',authMiddleware.auth, userController.delete);

// ######## ROUTES AUTH  #########
router.post('/auth', authController.auth);
// ########## ROUTES CONFIG ############

router.get('/config/:whatsApp',authMiddleware.auth,configController.config)

// ######## ROUTES C.R.U.D.. CUSTOMERS  #########
router.get('/customers',authMiddleware.auth,customersController.index)
router.get('/customers/:id',authMiddleware.auth,customersController.showId)
router.get('/search/customers',authMiddleware.auth, customersController.showParams);
router.post('/customers',authMiddleware.auth,customersController.create)
router.put('/customers',authMiddleware.auth,customersController.update)
router.delete('/customers/:id',authMiddleware.auth,customersController.delete)


module.exports = router;