import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// Styles
import { Btn } from './styles'

const Button = ({ text, click }) => (
  <Fragment>
    <Btn type="button" onClick={click}>
      {text}
    </Btn>
  </Fragment>
)

export default Button

Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func,
}
