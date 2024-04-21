const { maskId } = require("../../utils/mask");
const { DBTypeUser, DBTypeCompany } = require("../../utils/const");
const { repository } = require("./instance");

const ListEmployers = async () => {
    try {
        let employers = await repository.listEmployers();
        employers = employers.map(employer => ({
            ...employer,
            id: maskId(employer.id, DBTypeUser),
            company_id: maskId(employer.company_id, DBTypeCompany),
        }));

        return employers;
    } catch (error) {
        throw error;
    }
};

module.exports = ListEmployers;