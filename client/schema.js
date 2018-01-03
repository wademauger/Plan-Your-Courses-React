export const typeDefs = `

type Plan {
  id: ID!
  title: String!
  years: [String]!
}

type Query {
  plans: [Plan]
}

`
