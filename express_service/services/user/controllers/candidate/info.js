const { unmaskId } = require("../../utils/mask");
const { DBTypeUser } = require("../../utils/const");
const { repository } = require("./instance");
const { BadRequestError } = require("../../utils/app-errors");

const CandidateInfo = async (id) => {
    try {
        let decodedId = data.user_id;
        try {
            decodedId = unmaskId(id, DBTypeUser);
        } catch (error) {
            throw new BadRequestError("Not valid id!", "Require correct id!");
        }
        const  candidate = await repository.candidateInfo(decodedId);
        if(candidate === null) throw new BadRequestError("Candidate not found", "Candidate may not exist!");
        const formatCandidate = {
            ...candidate,
            id: id
        }

        return formatCandidate;
    } catch (error) {
        throw error;
    }
};

module.exports = CandidateInfo;
