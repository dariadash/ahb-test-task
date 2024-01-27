import styled, { css } from 'styled-components'

type ButtonProps = {
    secondary?: boolean,
    danger?: boolean,
    full?: boolean,
    disabled?: boolean,
}

const ButtonCss = css<ButtonProps>`
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px dashed #a3b7c7;
    background: #eff4ff;
    color: #90a8bb;
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        color: #eff4ff;
        background: #a3b7c7;
        transition: 0.3s;
    }

    ${({ secondary }) => secondary && css`
        background: #29a0e6;
        color: #fff;
        border: none;
        &:hover {
            background: #125780;
            color: #fff;
        }
    `}

    ${({ danger }) => danger && css`
        background: #c9403e;
        color: #fff;
        border: none;
        &:hover {
            background: #631413;
            color: #fff;
        }
    `}

    ${({ disabled }) => disabled && css`
        background: #555;
        color: #999;
        border: none;
        &:hover {
            background: #555;
            color: #999;
        }
    `}

    ${({ full }) => full && css`
        width: 100%;
    `}
`

export const Button = styled.button<ButtonProps>`
    ${ButtonCss};
`
