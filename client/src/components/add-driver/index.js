import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import styled from 'styled-components'

const AddForm = styled.div`
  display: flex;
  flex-direction: column;
`

const SET_DRIVERS = gql`
  mutation {
    addDriver(name: String, age: Int, country: String, team: String) {
      name
      age
      country
      team
    }
  }
`

const AddDriver = ({ name, age, country, team }) => {
  const [driver, setDriver] = useState({
    name: '',
    age: '',
    country: '',
    team: '',
  })

  const [addDriver, { error }] = useMutation(SET_DRIVERS, {
    variables: { name, age, country, team },
    refetchQueries: ['drivers'],
  })

  if (error) console.log(`Error: ${error}`)

  const handleChange = e => {
    setDriver({ ...driver, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <p>Add Driver Here:</p>
      <AddForm>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={driver.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            type="text"
            name="age"
            value={driver.age}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="country">
          Country:
          <input
            type="text"
            name="country"
            value={driver.country}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="team">
          Team:
          <input
            type="text"
            name="team"
            value={driver.team}
            onChange={handleChange}
          />
        </label>
        <button onClick={addDriver} type="button">
          Click me
        </button>
      </AddForm>
    </div>
  )
}

export default AddDriver

AddDriver.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  country: PropTypes.string,
  team: PropTypes.string,
}
