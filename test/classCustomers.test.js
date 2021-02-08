const Customers = require('../src/class/Customers');
const moment = require('moment')
describe('Class Tests Customers', () => {
    const customers = new Customers()
     
    const objeto = customers.print()
    it('should check the object value key Customers.name ', () => {
        expect(objeto).toHaveProperty('name','Cliente1');
        
    });
    it('should check the object value key Customers.email ', () => {
        expect(objeto).toHaveProperty('email','adm@adm');
        
    });
    it('should check the object value key Customers.birthDate ', () => {
        expect(objeto).toHaveProperty('date_birth',moment(Date.now()).format('Y-M-D'));
    });

    it('should check the object value key Customers.cellphone ', () => {
        expect(objeto).toHaveProperty('cellphone','551198881111');
    });
        
    });

