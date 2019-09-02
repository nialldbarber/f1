import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Driver from '../driver'
import { DriverHeader } from './styles'

const GET_DRIVERS = gql`
  query drivers {
    drivers {
      name
      age
      country
      team
    }
  }
`

const Drivers = () => {
  const { loading, error, data } = useQuery(GET_DRIVERS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error ☹️</p>

  return (
    <div className="drivers">
      <h3>Drivers</h3>
      <DriverHeader>
        <p>Name</p>
        <p>Age</p>
        <p>Country</p>
        <p>Team</p>
      </DriverHeader>
      {data.drivers.map(({ name, age, country, team }, i) => (
        <Driver key={i} name={name} age={age} country={country} team={team} />
      ))}
    </div>
  )
}

export default Drivers
