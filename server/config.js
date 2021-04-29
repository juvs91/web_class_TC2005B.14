import env from 'dotenv' // to know exactly why it takes the .env or to take another one, read https://github.com/motdotla/dotenv

env.config({path: './.env'})
if (env.error) {
  console.log('No .env file found, reading from ENVIRONMENT')
}

const PORT = process.env.PORT || 8000
const MYSQL_URL_CONNECTION_URL = process.env.MYSQL_URL_CONNECTION_URL || "mysql://user:super_secret_password@127.0.0.1:3306/test_db"
export {
  PORT,
  MYSQL_URL_CONNECTION_URL
}