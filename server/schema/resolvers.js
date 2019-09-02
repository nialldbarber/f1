const Driver = require('../models/drivers')
const Races = require('../models/races')

const resolvers = {
  Query: {
    drivers: () => Driver.find(),
    races: () => Races.find(),
  },
  Mutation: {
    addDriver: async (_, { name, age, country, team }) => {
      const driver = new Driver({ name, age, country, team })
      await driver.save()
      return driver
    },
    addRace: async (_, { name }) => {
      const race = new Races({ name })
      await race.save()
      return race
    },
  },
}

module.exports = resolvers
