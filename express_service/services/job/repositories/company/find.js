const { Company, Product } = require('./instance');
const { DBError } = require('../../utils/app-errors');

const FindCompanyById = async (id) => {
  try {
    const result = await Company.findOne({ where: { id: id } });
    const productOfCompany = await Product.findAll({ where: { companyId: id } });
    result.dataValues.products = productOfCompany.map((product) => product.dataValues);
    return result ? result.dataValues : result;
  } catch (error) {
    throw new DBError(error.message, 'Something went wrong with company DB');
  }
};

module.exports = FindCompanyById;
