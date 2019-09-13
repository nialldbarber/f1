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

const Driver = ({
  id,
  name,
  age,
  country,
  team,
  poles,
  wins,
  championships,
}) => {
  const [removeDriver, { error }] = useMutation(REMOVE_DRIVER, {
    variables: { id },
    refetchQueries: ['drivers'],
  })

  if (error) console.log(`Error: ${error}`)

  return (
    <DriverRow>
      <div>{name}</div>
      <div>{age}</div>
      <div>{country}</div>
      <div>{team}</div>
      <div>{poles}</div>
      <div>{wins}</div>
      <div>{championships}</div>
      <button type="submit" onClick={() => removeDriver(id)}>
        ✅
      </button>
    </DriverRow>
  )
}

export default Driver

Driver.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
  country: PropTypes.string,
  team: PropTypes.string,
  poles: PropTypes.number,
  wins: PropTypes.number,
  championships: PropTypes.number,
}
