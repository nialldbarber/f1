import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Driver from '../driver'

const Drivers = () => {
  const { loading, error, data } = useQuery(gql`
    {
      drivers {
        name
        age
        country
        team
      }
    }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error ☹️</p>

  return (
    <div className="drivers">
      <h3>Drivers</h3>
      {data.drivers.map(({ name, age, country, team }, i) => (
        <Driver key={i} name={name} age={age} country={country} team={team} />
      ))}
    </div>
  )
}

export default Drivers
