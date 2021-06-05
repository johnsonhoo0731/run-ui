import React from 'react'
import { ButtonProps } from './button.types'
import { ButtonStyles } from './button.styles'

const Button: React.FC<ButtonProps> = ({ disabled, ...props }) => {
  return (
    <ButtonStyles onClick={props.onClick} {...props} disabled={disabled}>
      {props.children}
    </ButtonStyles>
  )
}

export default Button
