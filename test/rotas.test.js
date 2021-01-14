const request = require('supertest')
const app = require('../src/app')
describe('teste das rotas', () => {

  it('should adiciona uma rota ok status code 200 ', async () => {
    const res = await request(app).get('/')
    // console.log(res)
    expect(res.statusCode).toBe(200);
  });

  it('should adiciona uma rota  status code 404 ', async () => {
    const res = await request(app).get('/err')
    // console.log(res)
    expect(res.statusCode).toBe(404);
  });

  it('should adiciona uma rota  status code 201 ', async () => {
    const pes = {name:"Alessandro",idade:49}
    const res = await request(app).post('/').send(pes);
    console.log(res.body)
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('name','Alessandro');
  });


  });
 