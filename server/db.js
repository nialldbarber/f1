import mongoose from 'mongoose'

require('dotenv').config({ path: '.env' })

const { connection, connect } = mongoose

connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useCreateIndex: true }
)
connection.once('open', () => {
  console.log('')
  console.log('||====================================================')
  console.log('||####################################################')
  console.log('||')
  console.log('|| 👉  Mongoose database connection established! 😎')
  console.log('||')
  console.log('||####################################################')
  console.log('||====================================================')
  console.log('')
})
