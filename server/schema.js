const gqlt = require('graphql-tools');
const makeExecutableSchema = gqlt.makeExecutableSchema;
const resolvers = require('./resolvers');

const typeDefs = `

type Plan {
  id: ID!
  title: String!
  years: [String]!
}

type Query {
  plans: [Plan]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = schema;
