import React from 'react'
import PropTypes from 'prop-types'
import { DriverRow } from './styles'

const Driver = ({ name, age, country, team }) => (
  <DriverRow>
    <p>{name}</p>
    <p>{age}</p>
    <p>{country}</p>
    <p>{team}</p>
  </DriverRow>
)

export default Driver

Driver.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  country: PropTypes.string,
  team: PropTypes.string,
}
