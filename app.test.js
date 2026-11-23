const request = require('supertest');
const app = require('./app');

test('GET / returns KT3 App', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('KT3 App');
});

test('GET /health returns ok', async () => {
  const res = await request(app).get('/health');
  expect(res.body).toEqual({ status: 'ok' });
});