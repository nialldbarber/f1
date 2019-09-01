import mongoose from 'mongoose'

const { Schema, model } = mongoose

const driverSchema = new Schema({
  name: String,
  age: Number,
  country: String,
  team: String,
  racesWon: Array,
})

export const Driver = model('driver', driverSchema)
