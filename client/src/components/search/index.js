import React, { useState } from 'react'
import PropTypes from 'prop-types'
// Styles
import { SearchBar } from './styles'
// Assets
import cross from '../../assets/images/close.svg'

const Search = ({ value, change, clear }) => {
  const [styles, setStyles] = useState('')

  return (
    <SearchBar className={styles}>
      <input
        type="text"
        placeholder="Search for a driver..."
        onChange={change}
        onClick={() => setStyles('active')}
        value={value}
      />
      <button type="button" onClick={clear}>
        <img src={cross} alt="Cross" />
      </button>
    </SearchBar>
  )
}

export default Search

Search.propTypes = {
  value: PropTypes.string,
  change: PropTypes.func,
  clear: PropTypes.func,
}
