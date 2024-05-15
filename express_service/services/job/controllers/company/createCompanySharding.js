const { repository } = require('./instance');
const { v4: uuidv4 } = require('uuid');

const CreateCompanyWithSharding = async (data) => {
  try {
    data.id = uuidv4();
    const result = await repository.createCompanyWithSharding(data);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = CreateCompanyWithSharding;
