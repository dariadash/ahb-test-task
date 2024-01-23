import React from 'react'
import styled from 'styled-components'

export const Layout = ({ children }: { children?: React.ReactNode }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}


const Container = styled.div`
    min-height: 50vh;
    margin-left: 20%;
    height: 100%;
    padding-right: 8px;
    box-sizing: border-box;

    @media only screen and (max-width: 600px) {
        padding-bottom: 64px;
        margin-left: 0;
        padding-left: 8px;
    }

`