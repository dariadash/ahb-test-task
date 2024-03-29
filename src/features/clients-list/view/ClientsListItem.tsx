import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { useDrag, useDrop } from 'react-dnd'

import { useAppDispatch } from "@/store/hooks"
import { Button, Icon } from "@/ui"
import { deleteItem, dragAndDropItem } from "../model"
import { ClientsListEditItem } from "./ClientsListEditItem"
import { Status } from "@/interfaces/types"
import { formattedDate } from "@/lib/dateFormat"

type ClientsListItemProps = {
    id: number,
    fullname: string,
    phone: string,
    region: string,
    status: Status,
    created_at: string,
    index: number,
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
}: ClientsListItemProps) => {
    const dispatch = useAppDispatch()
    const [edit, setEdit] = React.useState(false)

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
                dispatch(dragAndDropItem({
                    fromIndex: draggedItem.index,
                    toIndex: index
                }))
                draggedItem.index = index;
            }
        },
    });

    const opacity = isDragging ? 0.5 : 1;

    if (edit) {
        return (
            <ClientsListEditItem
                id={id}
                fullname={fullname}
                phone={phone}
                region={region}
                status={status}
                created_at={created_at}
                setEdit={setEdit}
            />
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

            <TableTd>{formattedDate(created_at)}</TableTd>
            <TdButtons>
                <Button onClick={() => setEdit(!edit)}>
                    <Icon icon="edit" />
                </Button>
                <Button danger onClick={() => dispatch(deleteItem(id))}>
                    <Icon icon='delete' />
                </Button>
            </TdButtons>
        </TableTr >
    )
}

type StyledProps = {
    opacity?: number
}

const TableTr = styled.div<StyledProps>`
    display: table-row;
    ${({ opacity }) => opacity && css`
        opacity: ${opacity};
    `}
`

const TableTd = styled.div`
    display: table-cell;
    border: 1px solid #a3b7c7;
    padding: 8px;
    text-align: left;
`

const TdButtons = styled.div`
    display:table-cell;
    padding: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
`