import React from 'react'
import styled from 'styled-components'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { useAppSelector } from '@/hooks/hooks'
import { AddForm } from './AddForm'
import { ClientsListItem } from './ClientsListItem'

export const ClientsList = () => {
    const clients = useAppSelector((state) => state.clientsReducer.clients)
    const [items, setItems] = React.useState(clients);
    const moveItem = (fromIndex, toIndex) => {
        const updatedItems = [...items];
        const [movedItem] = updatedItems.splice(fromIndex, 1);
        updatedItems.splice(toIndex, 0, movedItem);
        setItems(updatedItems);
    };
    return (
        <DndProvider backend={HTML5Backend}>
            <ListWrapper>
                <Table>
                    <thead>
                        <tr>
                            <TableTh>ID</TableTh>
                            <TableTh>Fullname</TableTh>
                            <TableTh>Phone</TableTh>
                            <TableTh>Region</TableTh>
                            <TableTh>Status</TableTh>
                            <TableTh>Created at</TableTh>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) =>
                            <ClientsListItem
                                key={index}
                                id={item.id}
                                fullname={item.fullname}
                                phone={item.phone}
                                region={item.region}
                                status={item.status}
                                created_at={item.created_at}
                                index={index}
                                moveItem={moveItem}
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
    border: 1px solid #ddd;
    background-color: #f2f2f2;
    padding: 8px;
    text-align: left;
`
