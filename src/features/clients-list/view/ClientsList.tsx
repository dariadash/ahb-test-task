import React from 'react'
import styled from 'styled-components'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { useAppSelector } from '@/hooks/hooks'
import { AddForm } from './AddForm'
import { ClientsListItem } from './ClientsListItem'
import { Filters } from './Filters'

export const ClientsList = () => {
    const clients = useAppSelector((state) => state.clientsReducer.clients)

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
                        {clients.map((item, index) =>
                            <ClientsListItem
                                key={index}
                                id={item.id}
                                fullname={item.fullname}
                                phone={item.phone}
                                region={item.region}
                                status={item.status}
                                created_at={item.created_at}
                                index={index}
                            />
                        )}
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
