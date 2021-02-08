var moment = require('moment');
const { get } = require('../routes');
class Customers {
    constructor() {
        // #### Atributos Privados da classe Factory de objetos
        let name = 'Cliente1';
        let date_birth = moment(Date.now()).format('Y-M-D')
        let email = 'adm@adm'
        let cellphone = '551198881111'
        // #### Access Method 
        this.getName = () => name;
        this.setName = (nameCustomers) => name =nameCustomers
        this.getEmail = () => email;
        this.setEmail = (emailCustomers) => email = emailCustomers
        this.getDateBirth = () => date_birth;
        this.setDateBirth = (dateBirthCustomers) => date_birth = moment(dateBirthCustomers).format('Y-M-D')
        this.getCellphone = () => cellphone;
        this.setCellphone = (cellphoneCustomers) => cellphone = cellphoneCustomers
    }

    print(){
        return {
            name: this.getName(),
            date_birth: moment(this.getDateBirth()).format('Y-M-D'),
            email: this.getEmail(),
            cellphone: this.getCellphone(),
           
        }
    }

    isBirthDay(){
        return moment(this.getDateBirth()).format('M-D')===moment(Date.now()).format('M-D')?true:false
    }

}
module.exports = Customers