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
        height: ${parseFloat(height) + 3 + 'px'};
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
    p.size && setSize(Config[p.size].width, Config[p.size].height, p.disabled)}
`
