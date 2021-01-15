const bcrypt = require('bcryptjs')
class  User {

    constructor() {
        
        // #### Atributos Privados da classe Factory de objetos
        let name = '';
        let email = '';
        let birthDate = '';
        let password = ''
        
        // #### Access Method 
        this.getName = () => name;
        this.setName = (newName) => name = newName;

        this.getEmail = () => email;
        this.setEmail = (newemail) => email = newemail;
        
        this.getBirthDate = () => birthDate;
        this.setBirthDate = (newBirthDate) => birthDate = newBirthDate;
        
        this.getPassword = () => password;
        this.setPassword = (newPassword) => password = newPassword;
    }
    // #### return of manufactured objects
    print() {
        return {
            name: this.getName(),
            email: this.getEmail(),
            birthDate: this.getBirthDate(),
            password:bcrypt.hashSync(this.getPassword(),8)
        }
    }
//#### returns true or false the comparison of the encrypted password
    async  compare(hashpass){
     const hash = await bcrypt.compare(this.getPassword(),hashpass)
     return hash
    }

 

}

module.exports = User