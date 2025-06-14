const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with Hello message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello from our CI/CD pipeline!');
  });
});
