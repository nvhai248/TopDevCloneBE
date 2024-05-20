const Job = require('./job');
const Company = require('./company');

async function syncModals() {
  Company.hasMany(Job, { onDelete: 'CASCADE' });
  Job.belongsTo(Company, { onDelete: 'CASCADE' });

  /* await Company.sync({ alter: true });
  await Job.sync({ alter: true }); */
}

module.exports = { syncModals };
