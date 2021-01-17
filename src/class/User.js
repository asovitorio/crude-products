const bcrypt = require('bcryptjs')
require('dotenv').config()
class User {

    constructor() {

        // #### Atributos Privados da classe Factory de objetos
        let name = 'adm';
        let email = 'adm@adm';
        let avatar = 'avatar.png';
        let password = '123'
        let status = 1

        // #### Access Method 
        this.getName = () => name;
        this.setName = (newName) => name = newName;

        this.getEmail = () => email;
        this.setEmail = (newemail) => email = newemail;

        this.getAvatar = () => avatar;
        this.setAvatar = (newAvatar) => avatar = newAvatar;

        this.getPassword = () => password;
        this.setPassword = (newPassword) => password = newPassword;
        
        this.getStatus = () => status;
        this.setStatus = (newStatus) => status = newStatus;
    }
    // #### return of manufactured objects
    print() {
        return {
            name: this.getName(),
            email: this.getEmail(),
            avatar: this.getAvatar(),
            password: bcrypt.hashSync(this.getPassword(), 8),
            status:this.getStatus(),
            created_at: new Date(),
            updated_at: new Date()
        }
    }
    //#### returns true or false the comparison of the encrypted password
    async compare(hashpass) {
        const hash = await bcrypt.compareSync(this.getPassword(), hashpass)
        return hash 
    }

    async hash(password){
        const hash = await bcrypt.hashSync(password, 8)
        return  hash
       }

}

module.exports = User