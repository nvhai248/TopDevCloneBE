const { unmaskId, maskId } = require("../../utils/mask");
const { DBTypeUser, DBTypeCompany } = require("../../utils/const");
const { repository } = require("./instance");
const { BadRequestError } = require('../../utils/app-errors');

const EmployerInfo = async (id) => {
    try {
        let decodedId;
        try {
            decodedId = unmaskId(id, DBTypeUser);
        } catch (error) {
            throw new BadRequestError("Not valid id!", "Require correct id!");
        }
        const employer = await repository.employerInfo(decodedId);
        if (employer === null) throw new BadRequestError("Employer not found!", "Employer may not exist!");
        const formatEmployer = {
            ...employer,
            id: id,
            company_id: maskId(employer.company_id, DBTypeCompany),
        }
        return formatEmployer;
    } catch (error) {
        throw error;
    }
};

module.exports = EmployerInfo;
