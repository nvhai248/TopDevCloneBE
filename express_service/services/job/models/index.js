const Job = require('./job');
const Company = require('./company');
const Product = require('./product');
const { sequelize1, sequelize2, sequelize3 } = require('../database/pg');
const { Company1, Company2, Company3 } = require('./companySharding');

async function syncModals() {
  Company.hasMany(Job, { onDelete: 'CASCADE' });
  Job.belongsTo(Company, { onDelete: 'CASCADE' });
  Company.hasMany(Product, { onDelete: 'CASCADE' });
  Product.belongsTo(Company, { onDelete: 'CASCADE' });

  // sync 3 job database for company sharding
  await Company1.sync({ alter: true });
  await Company2.sync({ alter: true });
  await Company3.sync({ alter: true });

  // await Company.sync({ alter: true });
  // await Job.sync({ alter: true });
  // await Product.sync({ alter: true });
}

module.exports = syncModals;
