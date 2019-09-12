import React, { Fragment, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// Components
import Button from '../button'
// Styles
import { FormContainer, AddForm } from './styles'

const ADD_DRIVERS = gql`
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
  const [startDate, setStartDate] = useState(new Date())
  const [driver, setDriver] = useState({
    name: '',
    age: '',
    country: '',
    team: '',
  })
  const [visibility, setVisibility] = useState(false)

  const { name, age, country, team } = driver

  const [addDriver, { error }] = useMutation(ADD_DRIVERS, {
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
    setDriver({
      name: '',
      age: '',
      country: '',
      team: '',
    })
  }
  const handleDateChange = date => {
    setStartDate(date)
    console.log(date)
  }

  return (
    <Fragment>
      <Button text="Add Driver" click={() => setVisibility(!visibility)} />
      <FormContainer className={visibility === true ? 'active' : ''}>
        <AddForm onSubmit={handleSubmit}>
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
            {/* <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={handleChange}
            /> */}
            <DatePicker selected={startDate} onChange={handleDateChange} />
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
      </FormContainer>
    </Fragment>
  )
}

export default AddDriver
