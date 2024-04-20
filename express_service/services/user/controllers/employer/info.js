const { unmaskId, maskId } = require("../../utils/mask");
const { DBTypeUser, DBTypeCompany } = require("../../utils/const");
const { repository } = require("./instance");

const EmployerInfo = async (id) => {
    try {
        const decodedId = unmaskId(id, DBTypeUser);
        let employer = await repository.employerInfo(decodedId);
        employer = {
            ...employer,
            id: id,
            company_id: maskId(employer.company_id, DBTypeCompany),
        }
        return employer;
    } catch (error) {
        throw error;
    }
};

module.exports = EmployerInfo;
