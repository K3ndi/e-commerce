//environement variable needs to be before the application
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const { Sequelize } = require('sequelize');

const app = require('./app');

const sequelize = new Sequelize('sql_store', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully MYSQL DATABASE.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

const port = process.env.PORT || 8888;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
