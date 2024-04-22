const { unmaskId } = require("../../utils/mask");
const { DBTypeUser } = require("../../utils/const");
const FormatCandidate = require("../../utils/format-result");
const { repository } = require("./instance");

const CandidateInfo = async (id) => {
    try {
        const decodedId = unmaskId(id, DBTypeUser);
        let candidate = await repository.candidateInfo(decodedId);
        candidate = {
            ...candidate,
            id: id
        }

        //candidate = FormatCandidate(candidate);
        return candidate;
    } catch (error) {
        throw error;
    }
};

module.exports = CandidateInfo;
