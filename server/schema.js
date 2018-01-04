const gqlt = require('graphql-tools');
const makeExecutableSchema = gqlt.makeExecutableSchema;
const addMockFunctionsToSchema = gqlt.addMockFunctionsToSchema;
const resolvers = require('./resolvers');

const typeDefs = `

type Course {
  id: ID!
  name: String!
  dept: String!
  num: String!
  credits: Int!
  isPlaceholder: Boolean!
  prereqs: [Course]!
}

type Term {
  id: ID!
  title: String!
  courses: [Course]
}

type Year {
  id: ID!
  title: String!
  terms: [Term]
}

type Plan {
  id: ID!
  title: String!
  years: [Year]!
}

type Query {
  plans: [Plan]
  plan(id: ID!): Plan
  year(id: ID!): Year
  term(id: ID!): Term
  course(id: ID!): Course
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = schema;
