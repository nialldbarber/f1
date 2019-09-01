import path from 'path'
import fs from 'fs'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { resolvers } from './schema/resolvers'

const typeDefs = fs.readFileSync('./schema/schema.graphql', 'utf8').toString()

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
