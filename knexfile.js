module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '1234',
      database: 'Toccom',
      charset: 'utf8'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
