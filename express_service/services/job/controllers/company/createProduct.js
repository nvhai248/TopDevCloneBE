const { DBTypeCompany } = require('../../utils/const');
const { unmaskId, maskId } = require('../../utils/mask');
const { repository } = require('./instance');

const CreateProduct = async (id, data) => {
  try {
    if (!id) {
      throw new Error('Company ID is required');
    }
    data.companyId = unmaskId(id, DBTypeCompany);
    const result = await repository.createProduct(data);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = CreateProduct;
