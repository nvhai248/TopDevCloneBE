const { Sequelize } = require('sequelize');
const { DB_PG_URI, DB_URI_1, DB_URI_2, DB_URI_3 } = require('../configs');

const sequelize = new Sequelize(DB_PG_URI, {
  ssl: true,
  dialect: 'postgres',
  logging: false,
});

const sequelize1 = new Sequelize(DB_URI_1, {
  dialect: 'postgres',
  logging: false,
  ssl: false,
});

const sequelize2 = new Sequelize(DB_URI_2, {
  dialect: 'postgres',
  logging: false,
  ssl: false,
});

const sequelize3 = new Sequelize(DB_URI_3, {
  dialect: 'postgres',
  logging: false,
  ssl: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

sequelize1
  .authenticate()
  .then(() => {
    console.log('Connection db shard 1 has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the db shard 1:', err);
  });

sequelize2
  .authenticate()
  .then(() => {
    console.log('Connection db shard 2 has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the db shard 2:', err);
  });

sequelize3
  .authenticate()
  .then(() => {
    console.log('Connection db shard 3 has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the db shard 3:', err);
  });

module.exports = { sequelize, sequelize1, sequelize2, sequelize3 };
