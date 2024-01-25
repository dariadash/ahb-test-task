import React from "react"
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import styled from "styled-components"

export const Client = () => {
    const { id } = useParams<{ id: string }>()
    const data = useAppSelector(state => state.clientsReducer.clients)

    const specificData = React.useMemo(() =>
        data.find(item => item.id === Number(id)),
        [data])



    return (
        specificData && <Container>
            <h1>{specificData.fullname}</h1>
            <h4>Тел.: {specificData.phone}</h4>
            <h4>Город: {specificData.region}</h4>
            <p>{specificData.status}</p>
            <p>
                {
                    new Date(specificData.created_at)
                        .toLocaleString('en-GB', {
                            year: '2-digit',
                            month: '2-digit',
                            day: '2-digit'
                        })
                }
            </p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`