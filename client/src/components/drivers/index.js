import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Driver from '../driver'
import { DriverTable, DriverHeader } from './styles'

const GET_DRIVERS = gql`
  query drivers {
    drivers {
      _id
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
    <DriverTable className="drivers">
      <DriverHeader>
        <div>Name</div>
        <div>Age</div>
        <div>Country</div>
        <div>Team</div>
        <div>Remove?</div>
      </DriverHeader>
      {data.drivers.map(({ _id, name, age, country, team }) => (
        <Driver
          key={_id}
          id={_id}
          name={name}
          age={age}
          country={country}
          team={team}
        />
      ))}
    </DriverTable>
  )
}

export default Drivers
