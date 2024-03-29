import React from "react"
import styled from "styled-components"

import { Input, Dropdown } from "@/ui"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { setFilter, setSearch } from "../model"
import { Status } from "@/interfaces/types"

export const Filters = () => {
    const dispatch = useAppDispatch()

    const { search, filterStatus } = useAppSelector((s) => s.clientFilterReducer)

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                onOptionChange={handleStatusFilterChange}
                placeholder="Статус"
                options={[
                    {
                        value: Status.Active,
                        text: Status.Active
                    },
                    {
                        value: Status.Inactive,
                        text: Status.Inactive
                    },
                    {
                        value: Status.Suspended,
                        text: Status.Suspended
                    },
                    {
                        value: '',
                        text: 'Не выбран'
                    }
                ]}
                selected={filterStatus || ''}
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
