import React, { Fragment, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
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
    $championships: Int!
  ) {
    addDriver(
      name: $name
      age: $age
      country: $country
      team: $team
      championships: $championships
    ) {
      name
      age
      country
      team
      championships
    }
  }
`

const AddDriver = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [driver, setDriver] = useState({
    name: '',
    country: '',
    team: '',
    championships: '',
  })
  const [born, setBorn] = useState('')
  const [visibility, setVisibility] = useState(false)

  const { name, country, team, championships } = driver

  const [addDriver, { error }] = useMutation(ADD_DRIVERS, {
    variables: {
      name,
      age: born,
      country,
      team,
      championships: parseInt(championships),
    },
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
      championships: '',
    })
  }

  const handleDateChange = date => {
    setStartDate(date)
    const birthDate = moment(date)
    const now = moment()
    const ageee = now.diff(birthDate, 'years')
    setBorn(ageee)
    console.log(born)
  }

  return (
    <Fragment>
      <Button text="Add Driver" click={() => setVisibility(!visibility)} />
      <FormContainer className={visibility === true ? 'active' : ''}>
        <h2>Add Driver</h2>
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
            <DatePicker selected={startDate} onChange={handleDateChange} />
          </label>
          <label htmlFor="country">
            Country:
            {/* <input
              type="text"
              name="country"
              id="country"
              value={country}
              onChange={handleChange}
            /> */}
            <select value={country} name="country" onChange={handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">
                Coconut
              </option>
              <option value="mango">Mango</option>
            </select>
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
          <label htmlFor="championships">
            Championships:
            <input
              type="text"
              name="championships"
              id="championships"
              value={championships}
              onChange={handleChange}
            />
          </label>
          <Button text="Add" onClick={() => setVisibility(false)} />
        </AddForm>
      </FormContainer>
    </Fragment>
  )
}

export default AddDriver
