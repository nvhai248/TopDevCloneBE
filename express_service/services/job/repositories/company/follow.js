const { CompanyFollow } = require('./instance');
const { DBError, BadRequestError } = require('../../utils/app-errors');

const CreateFollow = async (userId, companyId) => {
  try {
    if (existingFollow) {
      // Return a notification if the follow already exists
      throw new BadRequestError('you already follow this company', 'you already follow this company');
    }

    // Create a new follow record with the provided data
    const newFollow = await CompanyFollow.create({ userId, companyId });

    // Return true if creation was successful
    return newFollow ? true : false;
  } catch (error) {
    // If an error occurs, throw a DBError
    throw new DBError(error.message, 'Something went wrong with follow company creation');
  }
};

const DeleteFollow = async (userId, companyId) => {
  try {
    // Delete the follow record with the provided data
    const result = await CompanyFollow.destroy({
      where: {
        userId: userId,
        companyId: companyId,
      },
    });

    // Return true if a record was deleted
    return result > 0;
  } catch (error) {
    // If an error occurs, throw a DBError
    throw new DBError(error.message, 'Something went wrong with unfollow company deletion');
  }
};

module.exports = { CreateFollow, DeleteFollow };
