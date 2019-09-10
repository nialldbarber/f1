import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Heading } from './styles'

const Header = ({ title }) => (
  <Fragment>
    <Heading>{title}</Heading>
  </Fragment>
)

export default Header

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
