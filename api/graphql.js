const { ApolloServer, gql } = require('apollo-server-lambda')
const { RESTDataSource } = require('apollo-datasource-rest')
const fetch = require('isomorphic-fetch')

const typeDefs = gql`
  type Event @cacheControl(maxAge: 120) {
    id: ID!
    name: String!
    city: String
    image: String
  }

  type Query {
    serverReady: String
    getCurrentCalgaryEvents: [Event] @cacheControl(maxAge: 120)
  }
`
const resolvers = {
  Query: {
    serverReady: async () =>
      'I am response data from the GraphQL lambda server!',
    getCurrentCalgaryEvents: async (root, args, { dataSources }) => {
      const res = await fetch(
        'https://www.showpass.com/api/public/events/?ends_on__gte=2018-07-22T20:57:34.869Z&external_link__isnull=true&is_featured=true&location__point_location=50.847599029541016,-114.19580078125,65&ordering=starts_on&page=1&page_size=12'
      )
      const data = await res.json()
      return data.results
    },
  },
}

const options = {
  typeDefs,
  resolvers,
  tracing: true,
  cacheControl: true,
  engine: false,
}

if (process.env.ENGINE_API_KEY) {
  options.engine = { apiKey: process.env.ENGINE_API_KEY }
}

const server = new ApolloServer(options)

exports.handler = server.createHandler({})
