require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "pool": {
      "max": 2,
      "min": 0,
      "idle": 0,
      "acquire": 3000,
      "evict": 3000
    },
    "define": {
      "charset": 'utf8',
      "collate": 'utf8_general_ci',
      "timestamps": true,
      "underscored": true,
      "createdAt": 'created_at',
      "updatedAt": 'updated_at'
    },
    "logging": true
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "pool": {
      "max": 2,
      "min": 0,
      "idle": 0,
      "acquire": 3000,
      "evict": 3000
    },
    "define": {
      "charset": 'utf8',
      "collate": 'utf8_general_ci',
      "timestamps": true,
      "underscored": true,
      "createdAt": 'created_at',
      "updatedAt": 'updated_at'
    },
    "logging": false
  }
}
