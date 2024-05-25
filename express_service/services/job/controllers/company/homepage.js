const { DBTypeCompany } = require('../../utils/const');
const { maskId } = require('../../utils/mask');
const { repository } = require('./instance');

const HomePage = async () => {
  try {
    let supperSpotlight = []; // top 5 follow
    let featured = []; // top 6 max jobs
    let popular = []; // top 9 view

    popular = await repository.filterCompanyByConditions(null, 9, 0, 'most-viewed');

    supperSpotlight = await repository.filterCompanyByConditions(null, 5, 0, 'popular');

    featured = await repository.getTopCompaniesWithMostJobs(6);

    return {
      popular: popular.map((company) => ({
        ...company,
        id: maskId(company.id, DBTypeCompany),
      })),
      supperSpotlight: popular.map((company) => ({
        ...company,
        id: maskId(company.id, DBTypeCompany),
      })),
      featured: featured.map((company) => ({
        ...company,
        id: maskId(company.id, DBTypeCompany),
      })),
    };
  } catch (error) {
    throw error;
  }
};

module.exports = HomePage;
