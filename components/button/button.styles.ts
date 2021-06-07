import styled, { css } from 'styled-components'
import { Theme, Config } from '../../styles'
import { ButtonStyleProps } from './button.types'

export const setSize = (width: string, height: string, disbled?: boolean) => {
  return css`
    width: ${width};
    height: ${height};
    &:hover {
      ${!disbled &&
      css`
        width: ${parseFloat(width) + 8 + 'px'};
        height: ${parseFloat(height) + 4 + 'px'};
        margin-top: -2px;
        margin-left: -4px;
      `}
    }
  `
}

export const ButtonStyles = styled.button<ButtonStyleProps>`
  border: 0;
  cursor: ${(p) => (!p.disabled ? 'pointer' : 'no-drop')};
  border-radius: 20px;
  color: ${(p) =>
    !p.disabled ? (p.color ? p.color : Theme.color.gray) : Theme.color.white};
  background: ${(p) =>
    !p.disabled
      ? p.background
        ? p.background
        : Theme.color.default
      : Theme.color.gray};
  transition: ${(p) => !p.disabled && 'width, 0.1s, height, 0.1s'};
  ${(p) =>
    setSize(
      Config[p.size ? p.size : 'medium'].width,
      Config[p.size ? p.size : 'medium'].height,
      p.disabled
    )};
  ${(p) =>
    p.originType &&
    css`
      border: 1px solid #000000;
      background: #ffffff;
      color: #000000;
    `};
`
