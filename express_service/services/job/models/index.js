const Job = require('./job');
const Company = require('./company');
const Product = require('./product');

async function syncModals() {
  Company.hasMany(Job, { onDelete: 'CASCADE' });
  Job.belongsTo(Company, { onDelete: 'CASCADE' });
  Company.hasMany(Product, { onDelete: 'CASCADE' });
  Product.belongsTo(Company, { onDelete: 'CASCADE' });

  /* await Company.sync({ alter: true });
  await Job.sync({ alter: true });
  await Product.sync({ alter: true }); */
}

module.exports = syncModals;
