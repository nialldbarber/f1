import React from 'react'
import PropTypes from 'prop-types'

const Driver = ({ name, age, country, team }) => (
  <div>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Country: {country}</p>
    <p>Team: {team}</p>
  </div>
)

export default Driver

Driver.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  country: PropTypes.string,
  team: PropTypes.string,
}
