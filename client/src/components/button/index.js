import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// Styles
import { Btn } from './styles'

const Button = ({ text, click, state, type }) => (
  <Fragment>
    <Btn
      type={type === 'button' ? 'button' : 'submit'}
      className={state}
      onClick={click}
    >
      {text}
    </Btn>
  </Fragment>
)

export default Button

Button.propTypes = {
  text: PropTypes.string.isRequired,
  state: PropTypes.string,
  type: PropTypes.string,
  click: PropTypes.func,
}
