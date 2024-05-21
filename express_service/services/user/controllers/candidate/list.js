const { maskId } = require("../../utils/mask");
const { DBTypeUser } = require("../../utils/const");
const { repository } = require("./instance");

const ListCandidates = async () => {
    try {
        let candidates = await repository.listCandidates();
        candidates = candidates.map(candidate => ({
            ...candidate,
            id: maskId(candidate.id, DBTypeUser)
        }))

        return candidates;
    } catch (error) {
        throw error;
    }
};

module.exports = ListCandidates;