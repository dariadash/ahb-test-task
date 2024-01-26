import React from "react"
import styled from "styled-components"

import { Input, Dropdown } from "@/ui"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { setFilter, setSearch } from "../model"

export const Filters = () => {
    const dispatch = useAppDispatch()

    const { search, filterStatus } = useAppSelector((s) => s.clientFilterReducer)

    const handleSearchInputChange = event => {
        dispatch(setSearch(event.target.value))
    }

    const handleStatusFilterChange = value => {
        dispatch(setFilter(value))
    }

    return (
        <Container>
            <Input
                placeholder='Поиск'
                value={search}
                onChange={handleSearchInputChange}
            />
            <Dropdown
                placeholder="Статус"
                options={[
                    { value: 'Активен', text: 'Активен' },
                    { value: 'Неактивен', text: 'Неактивен' },
                    { value: 'Приостановлен', text: 'Приостановлен' },
                    { value: null, text: 'Не выбран' },
                ]}
                selected={filterStatus}
                onOptionChange={handleStatusFilterChange}
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`