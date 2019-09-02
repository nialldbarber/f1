const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./schema/schema')
const resolvers = require('./schema/resolvers')

require('./db')

const app = express()

app.use(cors(), bodyParser.json())

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({ app })

const port = process.env.port || 4000
app.listen(port, () =>
  console.log(
    `🚀  Schema is ready at http://localhost:${port}${server.graphqlPath}`
  )
)
