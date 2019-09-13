import React, { Fragment, useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
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
  // Fetch countries
  const [data, setData] = useState([])
  const [selectedOption, setSelectedOption] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://gist.githubusercontent.com/nialldbarber/df3fa4619ef34c4c8ea382fd464f2309/raw/14e26cf7e1a59b938317fb4aa376432ebe121870/countries.json'
      )
      setData(result.data)
    }
    fetchData()
  }, [])

  const { name, team, championships } = driver

  const [addDriver, { error }] = useMutation(ADD_DRIVERS, {
    variables: {
      name,
      age: born,
      country: selectedOption.label,
      team,
      championships: parseInt(championships),
    },
    refetchQueries: ['drivers'],
  })

  if (error) console.log(`Error: ${error}`)

  const handleChange = e => {
    setDriver({ ...driver, [e.target.name]: e.target.value })
  }

  const handleCountryChange = place => {
    setSelectedOption(place)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addDriver()
    setDriver({
      name: '',
      team: '',
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
              onChange={handleCountryChange}
              options={data}
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
