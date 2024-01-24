import React from "react"

import { fetchClients } from "./features/clients-list/model/clientsThunk"
import { useAppDispatch, useAppSelector } from "./hooks/hooks"
import { Routes } from "./router"

export function App() {
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.clientsReducer);

    React.useEffect(() => {
        dispatch(fetchClients());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <Routes />
    )
}