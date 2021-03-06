import React, { Fragment, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
// Components
import Driver from '../driver'
import Search from '../search'
// Styles
import { DriverTable, DriverHeader } from './styles'

const GET_DRIVERS = gql`
  query drivers {
    drivers {
      _id
      name
      age
      country
      team
      poles
      wins
      championships
    }
  }
`

const Drivers = () => {
  const [input, setInput] = useState('')
  const { loading, error, data } = useQuery(GET_DRIVERS)

  const filteredDrivers =
    data.drivers &&
    data.drivers.filter(({ name }) =>
      name.toLowerCase().includes(input.toLowerCase())
    )

  // TODO:
  // If search value doesn't match
  // show error

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleClear = () => {
    setInput('')
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error ☹️</p>

  return (
    <Fragment>
      <Search change={handleChange} clear={handleClear} value={input} />
      <DriverTable className="drivers">
        <DriverHeader>
          <div>Name</div>
          <div>Age</div>
          <div>Country</div>
          <div>Team</div>
          <div>Poles</div>
          <div>Wins</div>
          <div>Championship(s)</div>
          <div>Remove?</div>
        </DriverHeader>
        {filteredDrivers.map(
          ({ _id, name, age, country, team, poles, wins, championships }) => (
            <Driver
              key={_id}
              id={_id}
              name={name}
              age={age}
              country={country}
              team={team}
              poles={poles}
              wins={wins}
              championships={championships}
            />
          )
        )}
      </DriverTable>
    </Fragment>
  )
}

export default Drivers
