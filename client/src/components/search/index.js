import React, { useState } from 'react'
import PropTypes from 'prop-types'
// Styles
import { SearchBar } from './styles'

const Search = ({ change }) => {
  const [width, setWidth] = useState(200)
  return (
    <SearchBar>
      <input
        type="text"
        placeholder="Search for a driver..."
        onChange={change}
        onClick={() => setWidth(400)}
        style={{ width }}
      />
    </SearchBar>
  )
}

export default Search

Search.propTypes = {
  change: PropTypes.func,
}
