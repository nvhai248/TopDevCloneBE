const { sequelize1, sequelize2, sequelize3 } = require('../database/pg');
const { Company } = require('./conpany.schema');

// Define Company model for each shard
const Company1 = sequelize1.define('Company', Company, {
  tableName: 'companies',
  sequelize1,
});
const Company2 = sequelize2.define('Company', Company, {
  tableName: 'companies',
  sequelize2,
});
const Company3 = sequelize3.define('Company', Company, {
  tableName: 'companies',
  sequelize3,
});

module.exports = {
  Company1,
  Company2,
  Company3,
};
