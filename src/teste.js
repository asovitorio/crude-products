
// const User = require('./class/User')
const Customers = require('./class/Customers')
var bcrypt = require('bcryptjs');

// user.setName('Alessandro')
// user.setEmail('asovitorio@gmail.com')
// user.setBirthDate('2011-03-01')
//  user.setPassword('123456')

//  console.log(user.print())


//     const retu = async (hash) => {
//        const res = await user.compare(hash);
//        return await res
    
//     } 

// const {User} = require('./api/models') 
//  setInterval( async () =>{
//   const users = await Object(User.findAll())

//   users.map( user =>{
//      console.log(user.name)
     
//   })
//   setTimeout(() =>{
//      console.clear()
//   },5000)
        
//  },10000)  

var moment = require('moment')

// var cust = new Customers()
// cust.setName('Alessandro')
// cust.setDateBirth('1980-03-03')
// cust.setEmail('asovitorio@gmail.com')
// cust.setCellphone('11954965202')


// // console.log(cust.getName())
// // console.log(cust.getDateBirth())
// // console.log(cust.getEmail())
// // console.log(cust.getCellphone())
// console.log(cust.print())


console.log(moment(Date.now()))