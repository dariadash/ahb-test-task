import React from "react"
import styled from "styled-components"

import { Input, Dropdown } from "@/ui"

export const Filters = () => {
    return (
        <Container>
            <Input
                placeholder='Поиск'
            />
            <Dropdown
                placeholder="Статус"
                options={[
                    { value: '1', text: 'Активен' },
                    { value: '2', text: 'Неактивен' },
                    { value: '3', text: 'Приостановлен' },
                    { value: '4', text: 'Другое' },
                ]}
                onOptionChange={() => { }}
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`