import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(`postgres://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully');
  await sequelize.close();
  console.log('Connection has been closed');
} catch (error) {
  console.log('Unable to connect to the database', error);
}
