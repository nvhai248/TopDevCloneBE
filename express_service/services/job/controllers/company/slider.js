const { DBError } = require('../../utils/app-errors');
const { CompanyModal, JobModel } = require('./instance');

// Implement list companies for slider in home page and export
const ListCompanySlider = async (companyId) => {
  try {
    const companies = await CompanyModal.findAll({
      attributes: [
        'id',
        'name',
        'image',
        'solgan',
        'about',
        'url',
        [sequelize.fn('COUNT', sequelize.col('jobs.id')), 'positions'],
      ],
      include: [
        {
          model: JobModel,
          where: { status: 1 },
          attributes: [],
        },
      ],
      group: ['companies.id'],
      limit: 5,
    });
    return companies ? companies.map((job) => companies.dataValues) : companies;
  } catch (error) {
    throw new DBError(error.message, 'Something went wrong with company DB');
  }
};

module.exports = ListCompanySlider;
