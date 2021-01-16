const bcrypt = require('bcryptjs')
class User {

    constructor() {

        // #### Atributos Privados da classe Factory de objetos
        let name = 'adm';
        let email = 'adm@adm';
        let avatar = 'avatar.png';
        let password = '123'

        // #### Access Method 
        this.getName = () => name;
        this.setName = (newName) => name = newName;

        this.getEmail = () => email;
        this.setEmail = (newemail) => email = newemail;

        this.getAvatar = () => avatar;
        this.setAvatar = (newAvatar) => avatar = newAvatar;

        this.getPassword = () => password;
        this.setPassword = (newPassword) => password = newPassword;
    }
    // #### return of manufactured objects
    print() {
        return {
            name: this.getName(),
            email: this.getEmail(),
            avatar: this.getAvatar(),
            password: bcrypt.hashSync(this.getPassword(), 8),
            created_at: new Date(),
            updated_at: new Date()
        }
    }
    //#### returns true or false the comparison of the encrypted password
    async compare(hashpass) {
        const hash = await bcrypt.compare(this.getPassword(), hashpass)
        return hash
    }



}

module.exports = User