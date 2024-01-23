import React from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/hooks/hooks'

export const ClientsList = () => {
    const clients = useAppSelector((state) => state.initReducer.items)
    const dispatch = useAppDispatch()

    return (
        <div>
            {clients.map((item, index) =>
                <div key={index}>
                    <Link to={`/client/${item.id}`}>{item.fullname}</Link>
                    <p>{item.status}</p>
                    <p>{item.phone}</p>
                    <p>{item.region}</p>

                    <p>{new Date(item.created_at).toLocaleString()}</p>
                </div>
            )}

        </div>
    );
}