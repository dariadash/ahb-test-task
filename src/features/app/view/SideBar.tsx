import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Icon, onSmWidth } from '@/ui'

const sideBarItems = [
    {
        name: 'Отметиться',
        icon: 'star'
    },
    {
        name: 'Отметиться',
        icon: 'star'
    },
    {
        name: 'Отметиться',
        icon: 'star'
    },
    {
        name: 'Отметиться',
        icon: 'star'
    },
    {
        name: 'Отметиться',
        icon: 'star'
    },
]

export const SideBar = () => {

    return (
        <Container>
            <Wrapper>
                {sideBarItems.map(({ icon, name }, index) =>
                    <ItemWrapper key={index} to={'/'}>
                        <Icon
                            icon={'star'}
                            size={24}
                        />
                        <ItemName>
                            {name}
                        </ItemName>
                    </ItemWrapper>
                )}
            </Wrapper>
        </Container >
    )
}

const Container = styled.div`
    width: 20%;
    border-right: 1px solid #dfe6ec;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    background: #eff4ff;
    background-size: cover;
    z-index: 11;

    ${onSmWidth} {
        z-index: 999;
        width: 100vw;
        flex-direction: row;
        bottom: 0;
        top: auto;
        height: 64px;
        align-items: center;
        border-top: #dfe6ec;
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 12px;

    ${onSmWidth} {
        flex-direction: row;
        justify-content: space-around;
        padding: none;
    }
`

const ItemWrapper = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    font-size: 16px;

    height: 70px;
    width: 100%;
    border-radius: 8px;
    cursor: pointer;
    & * {
        color: #a3b7c7;
        padding-right: 10px;
    }

    &:hover {
        background-color: #c0cdd8;
        svg {
            fill: #eff4ff;
            stroke: #eff4ff;
        }
    }

    ${onSmWidth} {
        margin-bottom: 24px;

        & * {
            padding-right: 0;
        }
    }
`

const ItemName = styled.div`
    color: #111;
    ${onSmWidth} {
        display: none;
    }
`
