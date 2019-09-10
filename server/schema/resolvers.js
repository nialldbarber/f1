const Driver = require('../models/drivers')
const Races = require('../models/races')

const resolvers = {
  Query: {
    async drivers() {
      try {
        const drivers = await Driver.find()
        return drivers
      } catch (err) {
        throw new Error(err)
      }
    },
    races: () => Races.find(),
  },
  Mutation: {
    addDriver: async (_, { name, age, country, team }) => {
      const driver = new Driver({ name, age, country, team })
      await driver.save()
      return driver
    },
    async removeDriver(_, { _id }) {
      try {
        const removeDriver = await Driver.findById(_id)
        await removeDriver.delete()
        return `Driver deleted!`
      } catch (err) {
        throw new Error(err)
      }
    },
    addRace: async (_, { name }) => {
      const race = new Races({ name })
      await race.save()
      return race
    },
  },
}

module.exports = resolvers
