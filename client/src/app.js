import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'styled-components'
// Components
import Drivers from './components/drivers'
import AddDriver from './components/add-driver'
// Utils
import { client } from './utils/apollo-client'
// Styles
import { theme } from './styles/styled-components/utils/theme'
import { Heading } from './components/header/styles'

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <div className="app">
        <Heading>F1 Stats</Heading>
        <AddDriver />
        <Drivers />
      </div>
    </ThemeProvider>
  </ApolloProvider>
)

export default App
