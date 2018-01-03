export const typeDefs = `

type Plan {
  id: ID!
  title: String!
}

type Query {
  plans: [Plan]
}

`
