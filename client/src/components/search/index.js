import React from 'react'
import PropTypes from 'prop-types'
// Styles
import { SearchBar } from './styles'

const Search = ({ change }) => (
  <SearchBar>
    <input type="text" placeholder="Search for a driver..." onChange={change} />
  </SearchBar>
)

export default Search

Search.propTypes = {
  change: PropTypes.func,
}
