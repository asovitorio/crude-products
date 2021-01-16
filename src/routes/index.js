var express = require('express');
const userController = require('../api/controllers/userController')
var router = express.Router();

// ######## ROUTES C.R.U.D.E. USER #########
router.get('/user', userController.index);
router.get('/user/:id', userController.showId);
router.get('/search/user', userController.showParams);
router.post('/user', userController.create);
router.put('/user', userController.update);
router.delete('/user', userController.delete);

// ######## ROUTES AUTH  #########


// ######## ROUTES C.R.U.D.E. CUSTOMERS  #########



module.exports = router;