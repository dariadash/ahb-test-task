import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { useDrag, useDrop } from 'react-dnd'

import { useAppDispatch } from "@/hooks/hooks"
import { Button, DeleteButton, Icon, Input } from "@/ui"
import { deleteItem, editItem } from "../model/clientsSlice"

type ClientsListItemProps = {
    id: number,
    fullname: string,
    phone: string,
    region: string,
    status: string,
    created_at: string,
    index: number,
    moveItem: (itemIndex, index) => void
}

const ItemType = 'TABLE_ITEM';

export const ClientsListItem = ({
    id,
    fullname,
    phone,
    region,
    status,
    created_at,
    index,
    moveItem
}: ClientsListItemProps) => {
    const dispatch = useAppDispatch()
    const [edit, setEdit] = React.useState(false)
    const [editedData, setEditedData] = React.useState({
        id: id,
        fullname: fullname,
        status: status,
        phone: phone,
        region: region
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemType,
        item: { id, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: ItemType,
        hover: (draggedItem: any) => {
            if (draggedItem.index !== index) {
                moveItem(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    const opacity = isDragging ? 0.5 : 1;

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEditSubmit = () => {
        dispatch(editItem({ id: editedData.id, updatedData: editedData }));
        setEdit(false)
    };

    if (edit) {
        return (
            <TableTr>
                <TableTd>{id}</TableTd>
                <TableTd>
                    <Input
                        type="text"
                        name="fullname"
                        placeholder="fullname"
                        value={editedData.fullname}
                        onChange={handleEditChange}
                    />
                </TableTd>
                <TableTd>
                    <Input
                        type="tel"
                        name="phone"
                        placeholder="phone"
                        value={editedData.phone}
                        onChange={handleEditChange}
                    />
                </TableTd>
                <TableTd>
                    <Input
                        type="text"
                        name="region"
                        placeholder="region"
                        value={editedData.region}
                        onChange={handleEditChange}
                    />
                </TableTd>
                <TableTd>
                    <Input
                        type="text"
                        name="status"
                        placeholder="status"
                        value={editedData.status}
                        onChange={handleEditChange}
                    />
                </TableTd>

                <TableTd>{
                    new Date(created_at)
                        .toLocaleString('en-GB', {
                            year: '2-digit',
                            month: '2-digit',
                            day: '2-digit'
                        })}
                </TableTd>
                <Button onClick={() => handleEditSubmit()}>
                    <Icon icon="save" />
                </Button>
            </TableTr >
        )
    }


    return (
        <TableTr
            ref={(node) => drag(drop(node))}
            opacity={opacity}
        >
            <TableTd>{id}</TableTd>
            <TableTd>
                <Link to={`/client/${id}`}>{fullname}</Link>
            </TableTd>
            <TableTd>{phone}</TableTd>
            <TableTd>{region}</TableTd>
            <TableTd>{status}</TableTd>

            <TableTd>{
                new Date(created_at)
                    .toLocaleString('en-GB', {
                        year: '2-digit',
                        month: '2-digit',
                        day: '2-digit'
                    })}
            </TableTd>
            <TableTd>
                <Button onClick={() => setEdit(!edit)}>
                    <Icon icon="edit" />
                </Button>
                <DeleteButton onClick={() => dispatch(deleteItem(id))} />
            </TableTd>
        </TableTr >
    )
}

type StyledProps = {
    opacity?: number
}

const TableTr = styled.tr<StyledProps>`
    ${({ opacity }) => opacity && css`
        opacity: ${opacity};
    `}
`

const TableTd = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
` 
