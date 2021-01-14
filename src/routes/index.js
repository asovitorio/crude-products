var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  try {
    res.status(200).render('index',{ title: 'Express' });
  } catch (error) {
    res.status(404).send(error);
  }
});
router.post('/', function(req, res) {
  try {
    res.status(201).json(req.body) 
    
  } catch (error) {
    res.status(401).json(error) 
    
  }  

     
});

module.exports = router;
