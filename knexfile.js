require('dotenv').config({silent: true})

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database : process.env.DB_NAME,
      port     : process.env.DB_PORT,
      password : process.env.DB_PASSWORD,
      user     : process.env.DB_USER
    },
    migrations: {
      directory: './api/db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './api/db/seeds'
    }
  },
  
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    pool: {
      min: 1,
      max: 20
    },
    migrations: {
      directory: './api/db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './api/db/seeds'
    }
  }

};
