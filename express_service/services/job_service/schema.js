const typeDefs = `#graphql
  type Job {
    id: ID!
    companyId: ID!
    title: String!
    salary: Int!
    responsibilities: [String!]!
    skills: [String!]!
    extends: [String!]
    welfare: [String!]!
    experienceYearsMin: Int!
    experienceYearsMax: Int!
    level: String!
    type: String!
    typeContract: String!
    techs: [String!]!
    interviewProcess: [String!]!
  }
  type Query {
    jobs: [Job]
  }
`;

module.exports = typeDefs;