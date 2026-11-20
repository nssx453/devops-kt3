const { Client } = require('pg');
test('connects to postgres', async () => {
  const c = new Client({
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
  await c.connect();
  const res = await c.query('SELECT 1 as ok');
  expect(res.rows[0].ok).toBe(1);
  await c.end();
});
