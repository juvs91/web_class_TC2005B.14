import env from 'dotenv' // to know exactly why it takes the .env or to take another one, read https://github.com/motdotla/dotenv

env.config({path: './.env'})
if (env.error) {
  console.log('No .env file found, reading from ENVIRONMENT')
}

const PORT = process.env.PORT || 8000
const MYSQL_URL_CONNECTION_URL = process.env.MYSQL_URL_CONNECTION_URL || "mysql://user:super_secret_password@127.0.0.1:3307/test_db"
const PASSWORD_ROUNDS = process.env.PASSWORD_ROUNDS || 10
const TOKEN_EXPIRES_TIME = process.env.TOKEN_EXPIRES_TIME || 1000000
const SECRET_FOR_JWT = process.env.SECRET_FOR_JWT || 'secret-value'
export {
  PORT,
  MYSQL_URL_CONNECTION_URL,
  PASSWORD_ROUNDS,
  TOKEN_EXPIRES_TIME,
  SECRET_FOR_JWT
}