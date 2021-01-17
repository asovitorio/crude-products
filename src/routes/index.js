var express = require('express');
const userController = require('../api/controllers/userController')
const authController = require('../api/controllers/authController')
const authMiddleware = require('../api/middleware/authMiddleware')
var router = express.Router();

// ######## ROUTES C.R.U.D.E. USER #########
router.get('/user',authMiddleware.auth, userController.index);
router.get('/user/:id',authMiddleware.auth, userController.showId);
router.get('/search/user',authMiddleware.auth, userController.showParams);
router.post('/user',authMiddleware.auth, userController.create);
router.put('/user',authMiddleware.auth, userController.update);
router.delete('/user',authMiddleware.auth, userController.delete);

// ######## ROUTES AUTH  #########
router.post('/auth', authController.auth);


// ######## ROUTES C.R.U.D.E. CUSTOMERS  #########



module.exports = router;