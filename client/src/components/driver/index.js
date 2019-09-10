import React from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { DriverRow } from './styles'

const REMOVE_DRIVER = gql`
  mutation RemoveDriver($id: ID!) {
    removeDriver(_id: $id) {
      _id
      name
    }
  }
`

const Driver = ({ id, name, age, country, team }) => {
  const [removeDriver, { error }] = useMutation(REMOVE_DRIVER, {
    variables: { id },
    refetchQueries: ['drivers'],
  })

  if (error) console.log(`Error: ${error}`)

  return (
    <div>
      <DriverRow>
        <p>{name}</p>
        <p>{age}</p>
        <p>{country}</p>
        <p>{team}</p>
      </DriverRow>
      <button type="submit" onClick={() => removeDriver(id)}>
        ✅
      </button>
    </div>
  )
}

export default Driver

Driver.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
  country: PropTypes.string,
  team: PropTypes.string,
}
