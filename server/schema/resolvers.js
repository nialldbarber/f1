import { Driver } from '../models/drivers'
import { Races } from '../models/races'

export const resolvers = {
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
