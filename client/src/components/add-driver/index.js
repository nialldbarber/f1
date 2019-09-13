import React, { Fragment, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
// Hooks
import { FetchCountries } from '../../hooks/fetch-countries'
import { FetchTeams } from '../../hooks/fetch-teams'
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
    $poles: Int!
    $wins: Int!
    $championships: Int!
  ) {
    addDriver(
      name: $name
      age: $age
      country: $country
      team: $team
      poles: $poles
      wins: $wins
      championships: $championships
    ) {
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

const AddDriver = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [driver, setDriver] = useState({
    name: '',
    country: '',
    team: '',
    poles: '',
    wins: '',
    championships: '',
  })
  const [born, setBorn] = useState('')
  const [visibility, setVisibility] = useState(false)
  // Fetch countries
  const [selectedOption, setSelectedOption] = useState('')
  // Fetch teams
  const [selectedTeam, setSelectedTeam] = useState('')

  const [{ data }] = FetchCountries(
    'https://gist.githubusercontent.com/nialldbarber/df3fa4619ef34c4c8ea382fd464f2309/raw/14e26cf7e1a59b938317fb4aa376432ebe121870/countries.json',
    { countries: [] }
  )
  const [{ teams }] = FetchTeams(
    'https://gist.githubusercontent.com/nialldbarber/f0cdd6d671b1a9a7aa7af2c99bb80afe/raw/675f94afc3eb0370731b75c4e8411ce17a268841/f1.json',
    { teams: [] }
  )

  const { name, championships, poles, wins } = driver

  const [addDriver, { error }] = useMutation(ADD_DRIVERS, {
    variables: {
      name,
      age: born,
      country: selectedOption.label,
      team: selectedTeam.label,
      poles: parseInt(poles),
      wins: parseInt(wins),
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
      team: '',
      poles: '',
      wins: '',
      championships: '',
    })
    setVisibility(false)
  }

  const handleDateChange = date => {
    setStartDate(date)
    const birthDate = moment(date)
    const now = moment()
    const ageee = now.diff(birthDate, 'years')
    setBorn(ageee)
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
            <Select
              className="select"
              value={selectedOption}
              onChange={place => setSelectedOption(place)}
              options={data}
            />
          </label>
          <label htmlFor="team">
            Team:
            <Select
              className="select"
              value={selectedTeam}
              onChange={t => setSelectedTeam(t)}
              options={teams}
            />
          </label>
          <label htmlFor="championships">
            Poles:
            <input
              type="text"
              name="poles"
              id="poles"
              value={poles}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="championships">
            Wins:
            <input
              type="text"
              name="wins"
              id="wins"
              value={wins}
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
          <div className="action-buttons">
            <Button
              text="Exit"
              state="rag-error"
              click={() => setVisibility(false)}
              type="button"
            />
            <Button
              text="Add"
              state="rag-success"
              onClick={() => setVisibility(false)}
            />
          </div>
        </AddForm>
      </FormContainer>
    </Fragment>
  )
}

export default AddDriver
