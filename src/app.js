var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

require("dotenv").config({
    path: process.env.NODE_ENV ==='test' ? '.env.test':'.env' 
})
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// endpoint
app.use('/api/v1', indexRouter);

// const {User} = require('./api/models')

// async function teste(){
//     const t = await User.findAll()
//     const u = Object(t)
   
//   u.map(p =>{
//       console.log(p.name)
//   })
    
// }
//  teste()
module.exports = app;
