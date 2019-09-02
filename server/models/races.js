const mongoose = require('mongoose')

const { Schema, model } = mongoose

const racesSchema = new Schema({
  track: String,
  country: String,
  city: String,
  date: Number,
  winner: String,
  fastestLap: String,
  polePosition: String,
})

const Races = model('races', racesSchema)

module.exports = Races
