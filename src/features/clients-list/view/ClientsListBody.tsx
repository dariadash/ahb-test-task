import React from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { ClientsListItem } from './ClientsListItem'
import { saveClients } from '../model'
import { selectUserList } from '@/features/client-filter/model'
import { Status } from '@/interfaces/types'

export const ClientsListBody = () => {
    const { newClients, filteredClients, usersFetched } = useAppSelector(selectUserList)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (usersFetched) {
            dispatch(saveClients(newClients))
        }
    }, [usersFetched, filteredClients])
    return (
        <>
            {filteredClients.map((item, index) =>
                <ClientsListItem
                    key={index}
                    id={item.id}
                    fullname={item.fullname}
                    phone={item.phone}
                    region={item.region}
                    status={item.status as Status}
                    created_at={item.created_at}
                    index={index}
                />
            )}
        </>
    )
}