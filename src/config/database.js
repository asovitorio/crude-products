require('dotenv').config()
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  // host:'bd-crude',
  dialect: process.env.DB_DIALECT,
  port: parseInt(process.env.DB_PORT) || 3306,
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}