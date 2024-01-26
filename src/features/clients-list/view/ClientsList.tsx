import React from 'react'
import styled from 'styled-components'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { AddForm } from '../../client-add/view/AddForm'
import { Filters } from '../../client-filter/view/Filters'
import { ClientsListBody } from './ClientsListBody'

export const ClientsList = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <ListWrapper>
                <Filters />
                <Table>
                    <thead>
                        <tr>
                            <TableTh>ID</TableTh>
                            <TableTh>ФИО</TableTh>
                            <TableTh>Телефон</TableTh>
                            <TableTh>Город</TableTh>
                            <TableTh>Статус</TableTh>
                            <TableTh>Создан</TableTh>
                        </tr>
                    </thead>
                    <tbody>
                        <ClientsListBody />
                    </tbody>
                </Table>
            </ListWrapper>
            <AddForm />
        </DndProvider>
    );
}

const ListWrapper = styled.div`
    height: 85vh;
    overflow-y: scroll;
    border-bottom: 1px solid #90a8bb;

    &::-webkit-scrollbar {
        display: none;
    };
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
`

const TableTh = styled.th`
    border: 1px solid #a3b7c7;
    background-color: #eff4ff;
    color: #90a8bb;
    padding: 8px;
    text-align: left;
`
