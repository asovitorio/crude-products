require('dotenv').config()
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  // host:'banco-dados',
   dialect: process.env.DB_DIALECT,
  port: parseInt(process.env.DB_PORT) || 5432,
 // dialect:"postgres",
   logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}