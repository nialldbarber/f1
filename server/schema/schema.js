const { gql } = require('apollo-server')

const typeDefs = gql`
  type Driver {
    name: String!
    age: Int!
    country: String!
    team: String!
    #racesWon: [Race]
  }

  type Race {
    track: String!
    country: String!
    city: String!
    date: Int!
    winner: Driver!
    fastestLap: Driver!
    polePosition: Driver!
  }

  type Query {
    drivers: [Driver]
    races: [Race]
  }

  type Mutation {
    addDriver(name: String!, age: Int!, country: String!, team: String!): Driver
    addRace(
      track: String
      country: String
      city: String
      date: Int
      winner: String
      fastestLap: String
      polePosition: String
    ): Race
  }
`

module.exports = typeDefs
