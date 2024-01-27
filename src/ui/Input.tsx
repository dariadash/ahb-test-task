import styled, { css } from 'styled-components'

type InputWrapperProps = {
    hasError?: boolean
}

export const Input = styled.input<InputWrapperProps>`
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #c0cdd8;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #6FCF97;
    }

    ${({ hasError }) => hasError && css`
        border-color: #F53333;
    `}
`
