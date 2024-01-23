import React from 'react'
import styled from 'styled-components'
import { Icon, IconName } from './Icon'

type Props = {
    onClick?: (e?) => void,
    color?: string
    icon?: IconName
}
export const DeleteButton: React.FC<Props> = ({ onClick, color = 'red', icon = 'delete' }) => {
    return (
        <ButtonWrapper onClick={onClick}>
            <Icon icon={icon} color={color} />
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.div`
    cursor: pointer;
`