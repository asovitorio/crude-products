
const User = require('./class/User')
var bcrypt = require('bcryptjs');
const user = new User()
// user.setName('Alessandro')
// user.setEmail('asovitorio@gmail.com')
// user.setBirthDate('2011-03-01')
//  user.setPassword('123456')

 console.log(user.print())


    const retu = async (hash) => {
       const res = await user.compare(hash);
       return await res
    
    } 
 
   



