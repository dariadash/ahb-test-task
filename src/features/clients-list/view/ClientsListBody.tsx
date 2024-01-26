import React from 'react'
import { useAppSelector } from '@/store/hooks'
import { selectFilteredUsers } from '@/features/client-filter/model'
import { ClientsListItem } from './ClientsListItem'

export const ClientsListBody = () => {
    const clients = useAppSelector(selectFilteredUsers)
    return (
        <>
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
        </>
    )
}