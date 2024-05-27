const { maskId } = require("../../utils/mask");
const { DBTypeUser } = require("../../utils/const");
const { repository } = require("./instance");

const ListCandidatesByCondition = async (condition, limit, offset) => {
    try {
        /// Get list of candidates by condition
        let candidates = await repository.listCandidatesByCondition(condition, limit, offset);
        candidates = candidates.map(candidate => ({
            ...candidate,
            id: maskId(candidate.id, DBTypeUser)
        }))

        return candidates;
    } catch (error) {
        throw error;
    }
};

module.exports = ListCandidatesByCondition;