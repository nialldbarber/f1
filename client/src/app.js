import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Drivers from './components/drivers'
import AddDriver from './components/add-driver'

const client = new ApolloClient({
  uri: `http://localhost:4000/graphql`,
})

const App = () => (
  <ApolloProvider client={client}>
    <div className="App App-header">
      <h1>F1 Stats</h1>
      <AddDriver />
      <Drivers />
    </div>
  </ApolloProvider>
)

export default App
