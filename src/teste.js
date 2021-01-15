
const User = require('./class/User')
var bcrypt = require('bcryptjs');
const user = new User()
user.setName('Alessandro')
user.setEmail('asovitorio@gmail.com')
user.setBirthDate('2011-03-01')
 user.setPassword('123456')

console.log(user.print())

user.compare('$2a$08$A/EJBitIvi6peOv6C6C.feYBGFURby1XjeqI9xU7KEge0eijKXkR.')
    
 
    



