const mongoose = require('mongoose')

const { Schema, model } = mongoose

const driverSchema = new Schema({
  name: String,
  age: Number,
  death: Number,
  country: String,
  team: String,
  poles: Number,
  wins: Number,
  championships: Number,
})

const Driver = model('driver', driverSchema)

module.exports = Driver
