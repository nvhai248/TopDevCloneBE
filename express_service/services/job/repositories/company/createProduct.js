const { DBError } = require('../../utils/app-errors');
const { ProductModel } = require('./instance');

// Implement create job information here and export
const CreateProduct = async (data) => {
  try {
    // Create a new company with the provided data
    const newProduct = await ProductModel.create(data);

    // Return the newly created company data
    return newProduct.dataValues;
  } catch (error) {
    // If an error occurs, throw a DBError
    throw new DBError(error.message, 'Something went wrong with product creation');
  }
};

module.exports = CreateProduct;
