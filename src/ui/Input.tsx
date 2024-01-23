import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
    type?: string,
    placeholder?: string,
    value: any,
    max?: number,
    min?: number,
    onChange: (text: any) => void,
    onBlur?: () => void,
    hasError?: boolean,
    disabled?: boolean,
}

export const Input = React.forwardRef<HTMLInputElement, Props>(({
    placeholder,
    type,
    onChange,
    value,
    max,
    min,
    onBlur,
    hasError,
    disabled = false
}, ref) => {
    return (
        <InputWrapper
            ref={ref}
            placeholder={placeholder}
            type={type}
            value={value}
            max={max}
            min={min}
            onChange={(e) => onChange(e.target.value)}
            hasError={hasError}
            disabled={disabled}
            onBlur={onBlur}
        />
    )
})
Input.displayName = 'Input'

type InputWrapperProps = {
    hasError?: boolean
}

const InputWrapper = styled.input<InputWrapperProps>`
  flex-direction: row;
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
