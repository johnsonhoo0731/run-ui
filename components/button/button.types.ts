import React from 'react'
import { Config } from '../../styles'

export type ButtonStyleProps = {
  background?: string
  size?: Config.ButtonSize
  color?: string
}

export type ButtonProps = {
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
  loading?: boolean
  disabled?: boolean
} & ButtonStyleProps
