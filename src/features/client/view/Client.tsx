import React from "react"
import styled from "styled-components"
import { useParams } from 'react-router-dom'

import { useAppSelector } from "@/store/hooks"
import { formattedDate } from "@/lib/dateFormat"

export const Client = () => {
    const { id } = useParams<{ id: string }>()
    const data = useAppSelector(state => state.clientsReducer.clients)

    const specificData = React.useMemo(() =>
        data.find(item => item.id === Number(id)),
        [data]
    )

    return (
        <>
            {specificData && <Container>
                <h1>{specificData.fullname}</h1>
                <h4>Тел.: {specificData.phone}</h4>
                <h4>Город: {specificData.region}</h4>
                <p>{specificData.status}</p>
                <p>
                    {formattedDate(specificData.created_at)}
                </p>
            </Container>
            }
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`