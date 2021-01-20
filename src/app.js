var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var schedule = require('node-schedule');
var indexRouter = require('./routes/index');
let whatsApp = require('./services/whatsAppSend')

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

// #### Service of Msg whatsApp 

var j = schedule.scheduleJob('0 0 12 * * *', function(){
    whatsApp.send()
})

 


module.exports = app;
