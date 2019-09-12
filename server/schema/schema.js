const { gql } = require('apollo-server')

const typeDefs = gql`
  type Driver {
    _id: ID
    name: String
    age: Int
    country: String
    team: String
    championships: Int
    #racesWon: [Race]
  }

  type Race {
    _id: ID!
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
    addDriver(
      name: String!
      age: Int!
      country: String!
      team: String!
      championships: Int!
    ): Driver
    removeDriver(_id: ID!): Driver
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

// TODO:
// Add championships to schema
// Add races won
