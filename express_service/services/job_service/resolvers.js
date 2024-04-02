const db = require('./sample_data');

const resolvers = {
  Query: {
    jobs() {
      return db.jobs;
    }
  }
}

module.exports = resolvers;