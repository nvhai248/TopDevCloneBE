const { sequelize } = require('../../database/pg');
const { DBError } = require('../../utils/app-errors');
const { Company, Job } = require('./instance');

async function GetTopCompaniesWithMostJobs(limit) {
  try {
    const countCompanyHasNoJob = await Company.count({
      where: sequelize.literal('id NOT IN (SELECT DISTINCT "companyId" FROM "jobs")'),
    });

    const topCompanies = await Company.findAll({
      include: [
        {
          model: Job,
          attributes: [],
        },
      ],
      attributes: ['id', 'name', [sequelize.fn('COUNT', sequelize.col('jobs.id')), 'job_count']],
      group: ['Company.id'],
      order: [[sequelize.literal('job_count'), 'DESC']],
      limit: limit,
      offset: countCompanyHasNoJob,
      subQuery: false,
    });

    return topCompanies;
  } catch (error) {
    throw new DBError('DB Error', error.message);
  }
}

module.exports = GetTopCompaniesWithMostJobs;
