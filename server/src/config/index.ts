import 'dotenv/config'

export const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbHost: process.env.PG_HOST,
  dbPort: process.env.PG_PORT,
  dbUsername: process.env.PG_USERNAME,
  dbPassword: process.env.PG_PASSWORD,
  dbName: process.env.PG_DATABASE,
}
