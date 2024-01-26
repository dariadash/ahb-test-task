import React from "react"
import styled from "styled-components"

import { useAppDispatch } from "@/store/hooks"
import { Button, Icon, Input } from "@/ui"
import { editItem } from "../model"

type ClientsListEditItemProps = {
    id: number,
    fullname: string,
    status: string,
    phone: string,
    region: string,
    created_at: string,
    setEdit: (b: boolean) => void
}

export const ClientsListEditItem = ({
    id,
    fullname,
    status,
    phone,
    region,
    created_at,
    setEdit
}: ClientsListEditItemProps) => {
    const dispatch = useAppDispatch()
    const [editedData, setEditedData] = React.useState({
        id: id,
        fullname: fullname,
        status: status,
        phone: phone,
        region: region
    })

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleEditSubmit = () => {
        dispatch(editItem({ id: editedData.id, updatedData: editedData }))
        setEdit(false)
    }

    return (
        <tr>
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
        </tr >
    )
}

const TableTd = styled.td`
    border: 1px solid #a3b7c7;
    padding: 8px;
    text-align: left;
`