const { Op } = require('sequelize');
const { DBError } = require('../../utils/app-errors');
const { JobListModel } = require('./instance');

const ListJobByConditions = async (conditions, limit, offset) => {
    try {
        const searchConditions = {};

        const keywordQueries = conditions.keywords.flatMap((keyword) => [
            { title: { [Op.like]: `%${keyword}%` } },
            { skills: { [Op.like]: `%${keyword}%` } },
            { techs: { [Op.like]: `%${keyword}%` } },
        ]);

        if (keywordQueries.length) {
            searchConditions[Op.or] = keywordQueries;
        }

        if (conditions.level) {
            searchConditions.level = { [Op.like]: `%${conditions.level}%` };
        }
        if (conditions.type) {
            searchConditions.type = { [Op.like]: `%${conditions.type}%` };
        }
        if (conditions.typeContract) {
            searchConditions.typeContract = {
                [Op.like]: `%${conditions.typeContract}%`,
            };
        }

        /* if (conditions.address) {
      searchConditions.address = { [Op.like]: `%${conditions.address}%` };
    } */

        const jobs = await JobListModel.findAll({
            where: searchConditions,
            limit: limit,
            offset: offset,
        });

        return jobs ? jobs.map((job) => job.dataValues) : null;
    } catch (error) {
        throw new DBError(error.message, 'Something went wrong with job DB');
    }
};

module.exports = ListJobByConditions;
