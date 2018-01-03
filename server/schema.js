const gqlt = require('graphql-tools');
const makeExecutableSchema = gqlt.makeExecutableSchema;
const addMockFunctionsToSchema = gqlt.addMockFunctionsToSchema;

const typeDefs = `

type Plan {
  id: ID!
  title: String!
}

type Query {
  plans: [Plan]
}
`;

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });
module.exports = schema;
