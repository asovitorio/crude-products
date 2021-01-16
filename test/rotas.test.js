const request = require('supertest')
const app = require('../src/app')
describe('teste das rotas', () => {

  it('should adiciona uma rota ok status code 200 ', async () => {
    const res = await request(app).get('/api/v1/user')
    // console.log(res)
    expect(res.statusCode).toBe(200);
  });

  it('should adiciona uma rota  status code 404 ', async () => {
    const res = await request(app).get('/err')
    // console.log(res)
    expect(res.statusCode).toBe(404);
  });

  // it('should adiciona uma rota  status code 201 ', async () => {
  //   const pes = {name:"Alessandro",email:'asovitorio'}
  //   const res = await request(app).post('/api/v1/user').send({name:"Alessandro"});
  //   expect(1+1).toBe(2);
  //   // console.log(res)
  //   //  expect(res.status).toBe(201);
  //    expect(res.body).toHaveProperty('name','Alessandro');
  //    console.log(res.body)
  // });

  });
 