const User = require('../src/class/User');
describe('Class Tests Users', () => {
    const user = new User()
    user.setName('Alessandro')
    user.setEmail('asovitorio@gmail.com')
    user.setPassword('123')
    const objeto = user.print()
    it('should check the object value key User.name ', () => {
        expect(objeto).toHaveProperty('name','Alessandro');
        
    });
    it('should check the object value key User.email ', () => {
        expect(objeto).toHaveProperty('email','asovitorio@gmail.com');
        
    });
    it('should check the object value key User.birthDate ', () => {
        expect(objeto).toHaveProperty('avatar','avatar.png');
    });

    it('should check the object value key User.Avatar ', () => {
        expect(objeto).toHaveProperty('password');
    });
    it('should check the object value key User.password ', async () => {
      const hash =  user.compare(objeto.password)
      
        expect(await hash).toBe(true);
    });


        
    });

