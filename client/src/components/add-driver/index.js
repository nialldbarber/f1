import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { AddForm } from './styles'

const SET_DRIVERS = gql`
  mutation AddDriver(
    $name: String!
    $age: Int!
    $country: String!
    $team: String!
  ) {
    addDriver(name: $name, age: $age, country: $country, team: $team) {
      name
      age
      country
      team
    }
  }
`

const AddDriver = () => {
  const [driver, setDriver] = useState({
    name: '',
    age: '',
    country: '',
    team: '',
  })

  const { name, age, country, team } = driver

  const [addDriver, { error }] = useMutation(SET_DRIVERS, {
    variables: { name, age: parseInt(age), country, team },
    refetchQueries: ['drivers'],
  })

  if (error) console.log(`Error: ${error}`)

  const handleChange = e => {
    setDriver({ ...driver, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    addDriver()
  }

  return (
    <div>
      <p>Add Driver Here:</p>
      <AddForm action="" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="country">
          Country:
          <input
            type="text"
            name="country"
            id="country"
            value={country}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="team">
          Team:
          <input
            type="text"
            name="team"
            id="team"
            value={team}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </AddForm>
    </div>
  )
}

export default AddDriver
